import React from "react";
import Link from "next/link";
import Image from "next/image";

// async function getData() {
//   const res = await fetch(
//     `http://localhost:1337/api/products`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }
interface ProductProps {
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

const Product = ({
  name,
  id,
  url,
  cat,
  shortDesc,
  descPrice,
}: ProductProps) => {
  // const data = getData();
  return (
    <div>
      <div key={id} className="rounded-2xl overflow-hidden bg-gray-50">
        <Link href={`/${id}`}>
          <Image
            src={url}
            alt={name}
            width={600}
            height={600}
            className="object-cover h-64 w-full object-center"
          />
        </Link>
        <div className="p-4">
          <h3 className="uppercase text-gray-500">{cat}</h3>
          <h2 className="font-semibold text-2xl my-4">{name}</h2>
          <p className="text-sm text-gray-600">{shortDesc}</p>
        </div>
        <div className="flex justify-end space-x-4 p-4">
          {/* <del>${price}</del> */}
          <span className="font-bold text-2xl">${descPrice}</span>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full mb-4 border-purple-500 text-sm text-purple-700 font-semibold border-2 py-1 px-4 hover:bg-purple-500 hover:text-white hover:border-0">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
