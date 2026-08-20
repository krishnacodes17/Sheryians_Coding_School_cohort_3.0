import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  let getData = async () => {
    let res = await axios.get<Product[]>("https://fakestoreapi.com/products");
    //  console.log(res.data)
    setProductData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(productData);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
