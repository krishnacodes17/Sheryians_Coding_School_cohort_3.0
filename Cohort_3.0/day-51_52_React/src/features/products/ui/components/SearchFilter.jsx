import { Search } from "lucide-react";
import { useSearchProductCategory } from "../../hooks/useSearchProductCategory";

function SearchFilter({ search, setSearch, category, setCategory , mode, setMode }) {
  let { data, isPending, error } = useSearchProductCategory();

  if (isPending) return <h1>Loading</h1>;

  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Search Bar */}

      <div className="relative w-full md:w-2/3">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCategory("");
            setMode("search")
          }}
          className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Category Dropdown */}

      <div className="w-full md:w-64">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSearch("");
            setMode("category")

          }}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="all">Search by Category</option>

          {data.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
