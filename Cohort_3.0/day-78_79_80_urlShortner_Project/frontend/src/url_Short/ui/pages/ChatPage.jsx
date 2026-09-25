import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ShowUrl from "../components/ShowUrl";
import Footer from "../components/Footer";
import { ToastProvider } from "../components/Toast";
import { useLinks } from "../../hooks/useLinks";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
      refetchOnWindowFocus: true,
    },
  },
});

function Landing() {
  const { links, loading, shorten, remove } = useLinks();

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Background />
      <Nav />
      <main className="relative">
        <Hero onShorten={shorten} />
        <ShowUrl links={links} loading={loading} onDelete={remove} />
      </main>
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-80" />
      <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="animate-float absolute right-[-120px] top-1/4 h-96 w-96 rounded-full bg-indigo-600/15 blur-[110px]" />
      <div className="animate-float-slow absolute bottom-0 left-[-120px] h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[110px]" />
    </div>
  );
}

export default function ChatPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Landing />
      </ToastProvider>
    </QueryClientProvider>
  );
}