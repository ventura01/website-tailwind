import React from "react";
import Image from "next/image";
import { productos } from "../../datos";

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

const ProductDetail = ({ params }) => {
  const { id } = params;
  const data = productos[id - 1];
  console.log(data);

  return (
    <div className="container mx-auto mb-12">
      <div className="grid grid-cols-1 px-4 md:px-24 md:grid-cols-2">
        <div className="overflow-hidden md:p-8">
          <Image
            src={data.url}
            className="object-cover h-96 w-full object-center"
            width={600}
            height={600}
            alt={data.name}
          />
        </div>
        <div className="p-2 md:p-8">
          <h3 className="text-3xl uppercase text-gray-600 font-semibold">
            {data.cat}
          </h3>
          <h2 className="text-5xl font-bold my-4">{data.name}</h2>
          {/* <span>{data.price}</span> */}
          <p>{data.longDesc}</p>
          <div className="flex justify-end mt-4">
            <span className="text-4xl font-thin">${data.descPrice}</span>
          </div>
          <div className="flex justify-center my-4">
            <button className="rounded-full uppercase mb-4 border-purple-500 text-sm text-purple-700 font-semibold border-2 py-1 px-4 hover:bg-purple-500 hover:text-white hover:border-0">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
