import { useMemo, useState } from "react";
import { generateShortCode, shortLink, validateUrl } from "../utils";
import { useClipboard } from "./useClipboard";
import { useToast } from "../ui/components/toastContext";

export function useShortenForm({ onShorten }) {
  const notify = useToast();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [last, setLast] = useState(null);
  const { copied, copy } = useClipboard({
    onCopied: () => notify("Copied to clipboard", "success"),
  });

  const previewCode = useMemo(
    () => (value.trim() ? generateShortCode() : null),
    [value]
  );

  const change = (next) => {
    setValue(next);
    setError("");
  };

  const submit = async (e) => {
    e.preventDefault();
    const normalized = validateUrl(value);
    if (
      normalized === "Please enter a URL" ||
      normalized === "URL is too long" ||
      normalized.startsWith("Please enter")
    ) {
      setError(normalized);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const code = await onShorten(normalized);
      setLast({ originalUrl: normalized, shortCode: code });
      setValue("");
      notify("Short link created!", "success");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyResult = () => {
    if (last) copy(shortLink(last.shortCode));
  };

  return {
    value,
    error,
    loading,
    copied,
    last,
    previewCode,
    change,
    submit,
    copyResult,
  };
}