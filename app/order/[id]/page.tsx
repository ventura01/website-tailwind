import React from "react";
import Image from "next/image";
import styles from "../../styles/Order.module.css";
import {
  MdPaid,
  MdCheckCircle,
  MdDeliveryDining,
  MdCelebration,
  MdRamenDining,
} from "react-icons/md";
const Order = () => {
  const status: number = 0;
  const statusClass = (index: number) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.unDone;
  };

  return (
    <div className="container mx-auto flex flex-col mb-10 md:flex-row">
      <div className="flex flex-col w-full md:w-3/4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-sm md:text-base">Order ID</th>
              <th className="text-sm md:text-base">Customer</th>
              <th className="text-sm md:text-base">Address</th>
              <th className="text-sm md:text-base">Total</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="text-center">987456</td>
              <td className="text-center">Linwood Fritsch</td>
              <td className="text-center">0762 Jones Trace</td>
              <td className="text-center font-semibold">36</td>
            </tr>
          </tbody>
        </table>
        <div className="flex space-x-1 mt-12 mb-12 justify-around md:w-2/3 md:space-x-12">
          <div className={`${statusClass(0)} flex flex-col items-center`}>
            <span>Paid</span>
            <div>
              <MdPaid size={"2rem"} />
            </div>
            <div className={`${styles.checkedIcon}`}>
              <MdCheckCircle color="green" />
            </div>
          </div>
          <div className={`${statusClass(1)} flex flex-col items-center`}>
            <span>Preparing</span>
            <div>
              <MdRamenDining size={"2rem"} />
            </div>
            <div className={`${styles.checkedIcon}`}>
              <MdCheckCircle color="green" />
            </div>
          </div>
          <div className={`${statusClass(2)} flex flex-col items-center`}>
            <span>Sent</span>
            <div>
              <MdDeliveryDining size={"2rem"} />
            </div>
            <div className={`${styles.checkedIcon}`}>
              <MdCheckCircle color="green" />
            </div>
          </div>
          <div className={`${statusClass(3)} flex flex-col items-center`}>
            <span>Delivered</span>
            <div>
              <MdCelebration size={"2rem"} />
            </div>
            <div className={`${styles.checkedIcon}`}>
              <MdCheckCircle color="green" />
            </div>
          </div>
        </div>
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

export default Order;
