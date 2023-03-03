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
          <h3 className=" text-3xl my-3 font-bold text-center md:text-5xl">
            Our Products
          </h3>
          <p className="text-slate-600 text-center">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="grid grid-cols-1 w-3/4 gap-8 mx-auto sm:grid-cols-3">
          {/* <Product /> */}
          {productos.map((product: Product) => (
            <div key={product.id} className="rounded-2xl overflow-hidden">
              <Link href={`/`}>
                <Image
                  src={product.url}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-cover h-64 w-full object-center"
                />
              </Link>
              <div className="p-4">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p>{product.shortDesc}</p>
              </div>
              <div className="flex justify-end space-x-4 p-4">
                <del>${product.price}</del>
                <span>${product.descPrice}</span>
              </div>
              <div className="flex justify-center">
                <button className="rounded-full border-purple-500 text-purple-700 font-semibold border-2 py-2 px-4 hover:bg-purple-500 hover:text-white hover:border-0">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
