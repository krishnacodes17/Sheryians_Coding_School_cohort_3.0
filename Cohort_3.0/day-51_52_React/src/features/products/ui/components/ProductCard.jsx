import { Link } from "react-router-dom";
import { ShoppingCart, Eye, Star } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}

      <div className="relative overflow-hidden bg-gray-100">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          {Math.round(product.discountPercentage)}% OFF
        </span>

      </div>

      {/* Content */}

      <div className="space-y-4 p-5">

        <p className="text-sm capitalize text-gray-500">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-medium">
              {product.rating}
            </span>

          </div>

          <span
            className={`text-sm font-medium ${
              product.stock > 0
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-bold text-blue-600">
            ${product.price}
          </h3>

          <span className="text-sm text-gray-400">
            {product.brand}
          </span>

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700">

            <ShoppingCart size={18} />

            Add

          </button>

          <Link
            to={`/products/${product.id}`}
            className="flex items-center justify-center rounded-xl border border-gray-300 px-4 transition hover:bg-gray-100"
          >
            <Eye size={20} />
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;