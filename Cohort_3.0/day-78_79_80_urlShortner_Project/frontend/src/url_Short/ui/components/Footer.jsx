import { IconLink } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25">
              <IconLink className="h-5 w-5 text-white" />
            </span>
            <div>
              <p className="text-lg font-extrabold text-white">shortly</p>
              <p className="text-xs text-slate-500">
                Paste a link · Get a short one · Count clicks
              </p>
            </div>
          </div>

          <a
            href="#shorten"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-violet-400/40 hover:text-white"
          >
            Shorten a link
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} shortly — All rights reserved.</p>
          <p className="font-mono">MongoDB · Express · React · Node</p>
        </div>
      </div>
    </footer>
  );
}