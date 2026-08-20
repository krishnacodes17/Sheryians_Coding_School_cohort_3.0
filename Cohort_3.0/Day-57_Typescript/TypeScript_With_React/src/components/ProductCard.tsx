import type { Product } from "../types";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-2 text-sm font-medium capitalize text-blue-600">
          {product.category}
        </p>

        <h2 className="mb-3 line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="mb-4 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded bg-yellow-400 px-2 py-1 text-sm font-bold text-white">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">
            ${product.price}
          </h3>

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;