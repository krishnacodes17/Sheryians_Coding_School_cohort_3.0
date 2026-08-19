import React from "react";
import {
  useAllProduct,
  // useProductByCategory,
} from "../../hooks/useProductHook";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";
import { Key } from "lucide-react";

function ProductPage() {
  let {
    data: { products = [] } = {},
    isPending,
    search,
    setSearch,
    category,
    setCategory,
    mode,
    setMode
  } = useAllProduct();

// let {
//   data: { products: categoryProducts = [] } = {},
//   category,
//   setCategory,
// } = useProductByCategory();
  

  if (isPending) return <h1>loading</h1>;
// console.log(categoriesSearch.products)

  return (
    <>
      <div className="mb-5">
        <SearchFilter
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
          mode={mode}
          setMode={setMode}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {
        // categoryProducts.length > 0
        //   ? categoryProducts.map((product) => {
        //      return <ProductCard key={product.id} product={product} />;
        //     })
        //   :
           products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
}

export default ProductPage;
