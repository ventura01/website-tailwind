import React from "react";
import Product from "./Product";
import { productos } from "../datos";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  descPrice: number;
  shortDesc: string;
  longDesc: string;
  url: string;
  cat: string;
}
[];

// async function getData() {
//   const res = await fetch("http://localhost:1337/api/products");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const ProductList = () => {
  // const data = getData();

  return (
    <section id="product-list">
      <div className="container mx-auto mt-24 mb-10">
        <div className="text-center mb-10">
          <h3 className=" text-3xl my-3 font-bold text-center md:text-4xl">
            Our Products
          </h3>
          <p className="text-slate-600 text-center">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="grid grid-cols-1 w-auto gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 md:w-4/5">
          {/* <Product /> */}
          {productos.map((product: Product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              id={product.id}
              descPrice={product.descPrice}
              shortDesc={product.shortDesc}
              longDesc={product.longDesc}
              url={product.url}
              cat={product.cat}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
