import { useMemo, useState } from "react";

export function useSearchLinks(links = []) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return links;
    return links.filter(
      (l) =>
        l.originalUrl.toLowerCase().includes(q) ||
        l.shortCode.toLowerCase().includes(q)
    );
  }, [links, query]);

  return { query, setQuery, filtered };
}