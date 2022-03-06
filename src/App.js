import Product from "./components/Product";
import getProducts from "./data/getProducts.js";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const { products, error } = getProducts();
  if (error) return <div>failed to load</div>;
  if (!products) return <div>loading...</div>;
  return (
    <div className="bg-gray-100 h-full p-16 flex flex-col text-center text-xl font-thin">
      <div className="flex justify-end ">
        <input
          type="text"
          placeholder="Search"
          className="w-80 bg-gray-300 placeholder-gray-100 px-4 py-1 outline-none border-2 border-solid border-gray-400 rounded text-gray-500"
        ></input>
      </div>
      <h1 className="mb-4 font-normal text-3xl">Products</h1>
      <div className="flex flex-wrap gap-x-1 gap-y-2 h-auto">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
