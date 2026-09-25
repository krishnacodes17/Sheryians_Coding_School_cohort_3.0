import { useCallback, useRef, useState } from "react";
import { IconCheck, IconTrash } from "./icons";
import { createPortal } from "react-dom";
import { ToastContext } from "./toastContext";

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    clearTimeout(timers.current[id]);
    delete timers.current[id];
  }, []);

  const notify = useCallback(
    (message, type = "success", timeout = 3200) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setToasts((prev) => [...prev, { id, message, type }]);
      timers.current[id] = setTimeout(() => dismiss(id), timeout);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={notify}>
      {children}
      {toasts.length > 0 &&
        createPortal(
          <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex flex-col items-center gap-3 px-4">
            {toasts.map((toast) => (
              <button
                key={toast.id}
                onClick={() => dismiss(toast.id)}
                className={`pointer-events-auto flex max-w-md items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-2xl backdrop-blur-xl animate-fade-up ${
                  toast.type === "error"
                    ? "border-red-400/30 bg-red-950/80 text-red-200"
                    : toast.type === "info"
                      ? "border-white/15 bg-ink-800/90 text-slate-200"
                      : "border-emerald-400/30 bg-emerald-950/80 text-emerald-100"
                }`}
              >
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                    toast.type === "error"
                      ? "bg-red-400/20"
                      : toast.type === "info"
                        ? "bg-white/10"
                        : "bg-emerald-400/20"
                  }`}
                >
                  {toast.type === "error" ? (
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  ) : toast.type === "info" ? (
                    <IconTrash className="h-3.5 w-3.5" />
                  ) : (
                    <IconCheck className="h-3.5 w-3.5" />
                  )}
                </span>
                {toast.message}
              </button>
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}