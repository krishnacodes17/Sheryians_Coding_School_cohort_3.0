import { useCallback, useRef, useState } from "react";
import { copyText } from "../utils";

export function useClipboard({ onCopied } = {}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const copy = useCallback(
    async (text) => {
      try {
        await copyText(text);
        setCopied(true);
        onCopied?.();
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 1600);
        return true;
      } catch {
        return false;
      }
    },
    [onCopied]
  );

  return { copied, copy };
}