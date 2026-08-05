import React, { useState } from "react";
import { ProductDataApi } from "../api/ProductApi";
import { useQuery } from "@tanstack/react-query";
import ProductCardSkeleton from "../skelton/ProductSkelton";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    price: 500,
    rating: 0,
    stock: false,
  });

  console.log(filters);

  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: ProductDataApi,
    staleTime: 5000, //* its call api after 5 second
  });

  return (
    <div className="min-h-screen bg-gray-100 p-2 py-5">
      <div className="max-w-8xl mx-auto flex gap-6">
        {/* ================= FILTER SIDEBAR ================= */}

        <div className="w-72 bg-white rounded-xl shadow-lg p-5 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">Filters</h2>

          {/* Search */}

          <div className="mb-5">
            <label className="block mb-2 font-medium">Search</label>

            <input
              type="text"
              placeholder="Search Product..."
              value={filters.search}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  search: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Category */}

          <div className="mb-5">
            <label className="block mb-2 font-medium">Category</label>

            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  category: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3"
            >
              <option value="">All Categories</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>

          {/* Price */}

          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Max Price : ${filters.price}
            </label>

            <input
              type="range"
              min="0"
              max="500"
              value={filters.price}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  price: Number(e.target.value),
                })
              }
              className="w-full"
            />
          </div>

          {/* Rating */}

          <div className="mb-5">
            <label className="block mb-2 font-medium">Rating</label>

            <select
              value={filters.rating}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  rating: Number(e.target.value),
                })
              }
              className="w-full border rounded-lg p-3"
            >
              <option value="0">All Ratings</option>
              <option value="1">1★ & Above</option>
              <option value="2">2★ & Above</option>
              <option value="3">3★ & Above</option>
              <option value="4">4★ & Above</option>
            </select>
          </div>

          {/* Stock */}

          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              checked={filters.stock}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  stock: e.target.checked,
                })
              }
            />

            <span>In Stock Only</span>
          </div>

          {/* Reset */}

          <button
            onClick={() =>
              setFilters({
                search: "",
                category: "",
                price: 500,
                rating: 0,
                stock: false,
              })
            }
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Reset Filters
          </button>
        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">All Products</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* ProductCard */}
            {isPending ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            ) : (
              data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
