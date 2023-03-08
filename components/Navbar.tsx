"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";
import { links } from "@/datos";

//------------ ICONS------------
import { MdShoppingCart } from "react-icons/md";
//------------ REDUX------------
import { useSelector } from "react-redux";

interface LinksProps {
  name: string;
  route: string;
}

const Navbar = () => {
  // const quantity = useSelector((state) => state.cart.quantity);
  return (
    <nav>
      <div className="bg-gray-50 border-b-2 mb-6">
        <div className="container flex justify-between py-2 items-center mx-auto content-center ">
          <div className="font-bold text-gray-700">
            MOTT <span className="text-purple-600">&</span> CLAIRE
          </div>
          <div className="hidden md:flex sm:flex space-x-4">
            {links.map((link: LinksProps) => (
              <div key={link.route}>
                <ul>
                  <li className="font-semibold text-sm hover:text-purple-600">
                    <Link href={link.route}>{link.name}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="right-6 relative md:right-0">
            <span className="absolute bg-purple-600 font-semibold rounded-full text-white py-[1px] px-[5px] -right-[10px] -top-[10px] text-[10px]">
              {}
            </span>
            <MdShoppingCart size={"1.25rem"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
