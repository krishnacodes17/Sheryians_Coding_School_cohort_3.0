import {
  IconArrowRight,
  IconCheck,
  IconCopy,
  IconLink,
} from "./icons";
import { shortLink } from "../../utils";
import { useShortenForm } from "../../hooks/useShortenForm";

const SUGGESTIONS = [
  "https://sheryians.com/courses",
  "https://github.com/user/repo",
  "https://www.linkedin.com/in/yourprofile",
];

export default function Hero({ onShorten }) {
  const {
    value,
    error,
    loading,
    copied,
    last,
    previewCode,
    change,
    submit,
    copyResult,
  } = useShortenForm({ onShorten });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-violet-200 backdrop-blur">
            <IconLink className="h-3.5 w-3.5" />
            MERN · MongoDB · Express · React · Node
          </span>

          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Long links?
            <br />
            <span className="text-gradient">Make them short.</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-pretty text-base text-slate-400 sm:text-lg">
            Paste a long URL, get a short one, and see exactly how many people
            opened it.
          </p>

          <form
            id="shorten"
            onSubmit={submit}
            className="animate-fade-up mx-auto mt-10 max-w-2xl scroll-mt-28"
            noValidate
          >
            <div className="glass flex flex-col gap-2 rounded-2xl p-2 transition-colors focus-within:border-violet-400/40 sm:flex-row">
              <div className="relative flex flex-1 items-center">
                <IconLink className="pointer-events-none absolute left-4 h-5 w-5 text-slate-500" />
                <input
                  value={value}
                  onChange={(e) => change(e.target.value)}
                  placeholder="Paste a long URL here…"
                  className="w-full rounded-xl bg-transparent py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  aria-label="URL to shorten"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:shadow-violet-500/40 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
                      />
                    </svg>
                    Shortening…
                  </>
                ) : (
                  <>
                    Shorten
                    <IconArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            {error && (
              <p className="mt-3 text-sm font-medium text-red-400">{error}</p>
            )}

            {!last && previewCode && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400">
                <span>Your short link:</span>
                <span className="rounded-lg border border-dashed border-violet-400/40 bg-violet-400/5 px-3 py-1 font-mono text-violet-300">
                  {shortLink(previewCode)}
                </span>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-slate-500">Try:</span>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => change(s)}
                  className="max-w-[220px] truncate rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-violet-400/40 hover:text-violet-200"
                >
                  {s.replace("https://www.", "").replace("https://", "")}
                </button>
              ))}
            </div>
          </form>

          {last && (
            <div className="animate-fade-up mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-1">
              <div className="flex flex-col gap-3 rounded-[14px] bg-ink-900/80 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 text-left">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-emerald-300">
                    <IconCheck className="h-3.5 w-3.5" />
                    Link is live
                  </p>
                  <a
                    href={shortLink(last.shortCode)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block truncate font-mono text-lg font-semibold text-white transition-colors hover:text-violet-300"
                  >
                    {shortLink(last.shortCode)}
                  </a>
                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {last.originalUrl}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={shortLink(last.shortCode)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-violet-400/10 px-4 py-2.5 text-sm font-semibold text-violet-200 transition-all hover:border-violet-400/60 hover:bg-violet-500/20 active:scale-[0.98]"
                  >
                    Open short link
                    <IconArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={copyResult}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-violet-400/40 hover:bg-violet-500/10 active:scale-[0.98]"
                  >
                  {copied ? (
                    <>
                      <IconCheck className="h-4 w-4 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <IconCopy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}