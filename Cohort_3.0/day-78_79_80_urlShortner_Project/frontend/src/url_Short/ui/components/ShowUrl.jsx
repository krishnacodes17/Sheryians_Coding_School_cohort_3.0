import { useState } from "react";
import {
  IconCheck,
  IconCopy,
  IconLink,
  IconSearch,
  IconTrash,
} from "./icons";
import { formatNumber, shortLink, timeAgo } from "../../utils";
import { useSearchLinks } from "../../hooks/useSearchLinks";
import { useClipboard } from "../../hooks/useClipboard";
import { useToast } from "./toastContext";

function LinkRow({ link, onDelete, notify }) {
  const [confirming, setConfirming] = useState(false);
  const { copied, copy } = useClipboard({
    onCopied: () => notify("Copied to clipboard", "success"),
  });

  const handleCopy = () => copy(shortLink(link.shortCode));

  return (
    <div
      className={`grid grid-cols-1 gap-3 px-5 py-4 transition-colors last:border-b-0 md:grid-cols-[110px_1fr_90px_90px_auto] md:items-center ${
        confirming
          ? "border-b border-red-400/20 bg-red-500/[0.05]"
          : "border-b border-white/5 hover:bg-white/[0.03]"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="rounded-lg bg-violet-400/10 px-3 py-1.5 font-mono text-sm font-semibold text-violet-300 ring-1 ring-violet-400/20">
          /{link.shortCode}
        </span>
      </div>

      <div className="min-w-0">
        <a
          href={shortLink(link.shortCode)}
          target="_blank"
          rel="noreferrer"
          className="block truncate text-sm font-bold text-violet-300 transition-colors hover:text-violet-200 hover:underline"
          title="Open short link"
        >
          {shortLink(link.shortCode)}
        </a>
        <p className="mt-0.5 block truncate text-xs text-slate-500">
          {link.originalUrl}
        </p>
      </div>

      <div>
        <p className="text-lg font-bold text-white">
          {formatNumber(link.clicks)}
        </p>
        <p className="text-[11px] uppercase tracking-wider text-slate-500">
          clicks
        </p>
      </div>

      <p className="hidden text-sm text-slate-500 md:block">
        {timeAgo(link.createdAt)}
      </p>

      {confirming ? (
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              setConfirming(false);
              onDelete(link);
            }}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-red-500/90 px-3 text-xs font-semibold text-white transition-all hover:bg-red-500 active:scale-95"
          >
            <IconTrash className="h-3.5 w-3.5" />
            Delete
          </button>
          <button
            onClick={() => setConfirming(false)}
            className="inline-flex h-9 items-center rounded-lg border border-white/10 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-white/5"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <a
            href={shortLink(link.shortCode)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-violet-400/30 bg-violet-400/10 px-3 text-xs font-semibold text-violet-200 transition-all hover:border-violet-400/60 hover:bg-violet-500/20 active:scale-95"
            title="Open short link"
          >
            Open
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 px-3 text-xs font-medium text-slate-300 transition-all hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300 active:scale-95"
          >
            {copied ? (
              <>
                <IconCheck className="h-3.5 w-3.5 text-emerald-400" />
                Copied!
              </>
            ) : (
              <>
                <IconCopy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
          <button
            onClick={() => setConfirming(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-400 active:scale-95"
            aria-label="Delete link"
          >
            <IconTrash className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function ShowUrl({ links = [], loading, onDelete }) {
  const notify = useToast();
  const { query, setQuery, filtered } = useSearchLinks(links);

  return (
    <section
      id="links"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-16 pt-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
            Your links
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            All your short URLs
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search links..."
              className="w-48 rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-violet-400/40 focus:outline-none sm:w-56"
            />
          </div>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 sm:inline">
            {filtered.length} {filtered.length === 1 ? "link" : "links"}
          </span>
        </div>
      </div>

      <div className="glass mt-8 overflow-hidden rounded-3xl">
        <div className="hidden grid-cols-[110px_1fr_90px_90px_auto] items-center gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid">
          <span>Code</span>
          <span>Original URL</span>
          <span>Clicks</span>
          <span>Created</span>
          <span>Actions</span>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-violet-400" />
            <p className="mt-4 text-sm text-slate-400">Loading links…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-600/20 ring-1 ring-white/10">
              <IconLink className="h-8 w-8 text-violet-300" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-white">
              {query ? "No matching links" : "No links yet"}
            </h3>
            <p className="mt-2 max-w-sm text-sm text-slate-400">
              {query
                ? "Try a different search term."
                : "Shorten your first one above."}
            </p>
          </div>
        ) : (
          filtered.map((link) => (
            <LinkRow
              key={link._id || link.shortCode}
              link={link}
              onDelete={onDelete}
              notify={notify}
            />
          ))
        )}
      </div>
    </section>
  );
}