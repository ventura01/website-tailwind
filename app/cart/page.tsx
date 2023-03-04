import Image from "next/image";
import React from "react";



const Cart = () => {
  return (
    <div className="container mx-auto flex flex-col mb-10 md:flex-row">
      <div className="flex flex-row w-full md:w-3/4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-sm md:text-base">Product</th>
              <th className="text-sm md:text-base">Name</th>
              <th className="text-sm md:text-base">Price</th>
              <th className="text-sm md:text-base">Qty</th>
              <th className="text-sm md:text-base">Total</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>
                <Image
                  src={"/illustration-hero.svg"}
                  alt="img-hero"
                  width={120}
                  height={120}
                  className="object-cover h-24 w-full object-center"
                />
              </td>
              <td className="text-center">Capuccino</td>
              <td className="text-center">18</td>
              <td className="text-center">3</td>
              <td className="text-center font-semibold">36</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-gray-700 p-1 text-white w-full md:w-1/4 md:p-6">
        <div className="flex flex-col px-16 md:px-12 py-12 max-h-72">
          <div className="mb-4">
              <h2 className="font-black text-3xl">Cart Total</h2>
              <div className="flex">
                <p>Sub-Total:</p>
                <b className="ml-8">79</b>
              </div>
              <div className="flex">
                <p>Discount:</p>
                <b className="ml-8 text-center">12</b>
              </div>
              <div className="flex">
                <p>Total:</p>
                <b className="ml-8 text-center">97</b>
              </div>
          </div>
          <div>
            <button className="bg-white font-bold text-purple-600 bg py-1 px-2 rounded-full hover:bg-purple-600 hover:text-white">
              CHECK NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
