"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";
import { links } from "@/datos";

interface LinksProps {
  name: string;
  route: string;
}

const Navbar = () => {
  return (
    <nav>
      <div className="bg-gray-50 border-b-2 mb-6">
        <div className="container flex justify-between py-2 items-center mx-auto content-center ">
          <div className="font-bold">
            MOTT <span className="text-purple-500">&</span> CLAIRE
          </div>
          <div className="hidden md:flex sm:flex space-x-4">
            {links.map((link: LinksProps) => (
              <div key={link.route}>
                <ul>
                  <li className="hover:text-purple-600">
                    <Link href={link.route}>{link.name}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="hidden md:flex">
            <Button />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
