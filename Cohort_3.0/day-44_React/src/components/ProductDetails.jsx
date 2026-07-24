import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetails() {

  const [singleProduct, setSingleProduct] = useState([]);
  let {id} = useParams();

  let singleData = async () => {

    try {
      let data = await axios.get(`https://fakestoreapi.com/products/${id}`);
    //   console.log(data);
      setSingleProduct(data.data)
    } catch (error) {
        console.log("Error happen : ", error)
    }

  };

  useEffect(() => {
      singleData();
}, []);

// console.log(singleProduct)

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}

        <div className="bg-white shadow rounded-xl p-10 flex justify-center items-center">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="h-[450px] object-contain"
          />
        </div>

        {/* Details */}

        <div className="space-y-6">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {singleProduct.category}
          </span>

          <h1 className="text-4xl font-bold">{singleProduct.title}</h1>

          <div className="flex items-center gap-3">
            ⭐ {singleProduct.rating?.rate}
            <span className="text-gray-500">
              ({singleProduct.rating?.count} Reviews)
            </span>
          </div>

          <h2 className="text-4xl text-green-600 font-bold">
            ${singleProduct.price}
          </h2>

          <p className="text-gray-600 leading-8">{singleProduct.description}</p>

          {/* Quantity */}

          <div className="flex items-center gap-4">
            {/* <button
              className="w-10 h-10 rounded bg-gray-200"
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
            >
              -
            </button> */}

            {/* <span className="text-2xl">
              {quantity}
            </span> */}

            {/* <button
              className="w-10 h-10 rounded bg-gray-200"
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              +
            </button> */}
          </div>

          {/* Buttons */}

          <div className="flex gap-5">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
              Add To Cart
            </button>

            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
