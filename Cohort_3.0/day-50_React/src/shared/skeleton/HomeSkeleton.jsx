function HomeSkeleton() {
  return (
    <div className="animate-pulse space-y-8">

      {/* Hero Section */}
      <div className="h-72 rounded-3xl bg-zinc-800"></div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-28 rounded-2xl bg-zinc-800"
          ></div>
        ))}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-48 rounded-2xl bg-zinc-800"
          ></div>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-zinc-800 p-4"
          >
            <div className="h-40 rounded-xl bg-zinc-800"></div>

            <div className="mt-4 h-4 rounded bg-zinc-800"></div>

            <div className="mt-3 h-4 w-2/3 rounded bg-zinc-800"></div>

            <div className="mt-6 h-10 rounded-xl bg-zinc-800"></div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default HomeSkeleton;