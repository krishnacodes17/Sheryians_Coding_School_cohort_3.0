import { useContext } from "react";
import { DataContext } from "../context/DataContex";

function Cart({ cart }) {

let { cartProduct , setCartProduct,} = useContext(DataContext)
console.log(cartProduct)

  return (
    <div className="w-[380px] m-4 bg-white shadow-xl rounded-xl p-5 border">
      <h2 className="text-2xl font-bold mb-5">
        🛒 Shopping cartProduct
      </h2>

      {cartProduct.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          cartProduct is Empty 😢
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartProduct.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b pb-4"
              >
                {/* Image */}
                <div className="w-20 h-20 bg-white flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-semibold line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-green-600 font-bold mt-1">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button className="w-7 h-7 bg-gray-200 rounded">
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button className="w-7 h-7 bg-gray-200 rounded">
                      +
                    </button>
                  </div>
                </div>

                {/* Remove */}
                <button className="text-red-500 font-bold">
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 border-t pt-4">
            

            <button className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;