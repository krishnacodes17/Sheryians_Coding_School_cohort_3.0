import { useNavigate } from "react-router";

function ProductCard({ product }) {

      const navigate = useNavigate()

  return (
    <div className="w-80 rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition duration-300">
      
      {/* Product Image */}
      <div onClick={()=>navigate(`/details/${product.id}`)} className="h-64 bg-white flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="font-semibold text-lg line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <div className="text-yellow-500">
            ⭐ {product.rating.rate}
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;