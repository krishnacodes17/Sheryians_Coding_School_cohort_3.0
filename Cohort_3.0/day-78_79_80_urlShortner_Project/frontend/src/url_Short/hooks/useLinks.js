import { useCallback, useEffect, useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { createShortLink, fetchLinks, removeLink } from "../../api/client";
import { DEMO_LINKS, generateShortCode } from "../utils";
import { useToast } from "../ui/components/toastContext";

export function useLinks() {
  const notify = useToast();
  const queryClient = useQueryClient();

  const { data: serverLinks = [], isLoading, isError } = useQuery({
    queryKey: ["links"],
    queryFn: fetchLinks,
  });

  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (isError || serverLinks.length === 0) {
      setLinks((prev) => (prev.length === 0 ? DEMO_LINKS : prev));
    } else {
      setLinks(serverLinks);
    }
  }, [isError, serverLinks]);

  const createLinkMut = useMutation({
    mutationFn: createShortLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });

  const deleteLinkMut = useMutation({
    mutationFn: removeLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });

  const shorten = useCallback(
    async (url) => {
      let code;
      try {
        const res = await createLinkMut.mutateAsync(url);
        code = res?.shortCode;
      } catch (err) {
        if (err?.response?.status === 400) {
          notify("That URL doesn't look valid", "error");
          throw err;
        }
      }

      if (!code) {
        code = generateShortCode();
        setLinks((prev) => [
          {
            _id: `local-${Date.now()}`,
            shortCode: code,
            originalUrl: url,
            clicks: 0,
            createdAt: new Date().toISOString(),
          },
          ...prev,
        ]);
      }

      return code;
    },
    [createLinkMut, notify]
  );

  const remove = useCallback(
    async (link) => {
      setLinks((prev) => prev.filter((l) => l._id !== link._id));
      notify("Link deleted", "info");
      if (
        String(link._id).startsWith("demo-") ||
        String(link._id).startsWith("local-")
      ) {
        return;
      }
      try {
        await deleteLinkMut.mutateAsync(link._id);
      } catch {
        queryClient.invalidateQueries({ queryKey: ["links"] });
      }
    },
    [deleteLinkMut, notify, queryClient]
  );

  return {
    links,
    loading: isLoading && links.length === 0,
    shorten,
    remove,
  };
}