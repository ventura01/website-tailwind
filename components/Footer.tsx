import React from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs";
const fecha = new Date().getFullYear();

const Footer = () => {
  return (
    <section id="footer">
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-6 flex flex-col-reverse md:flex-row md:justify-between">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center font-bold text-white">
              MOTT <span className="text-purple-500">&</span> CLAIRE
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center mb-4">
                <ul className="text-sm">
                  <li>009 Rowland Burg</li>
                  <li>Virginia</li>
                  <li>West Virginia</li>
                  <li>10893</li>
                  <li>(256) 897 897 654</li>
                </ul>
              </div>
              <div className="flex space-x-4 justify-center ">
                <Link href="/">
                  <BsFacebook style={{ color: "white" }} />
                </Link>
                <Link href="/">
                  <BsInstagram style={{ color: "white" }} />
                </Link>
                <Link href="/">
                  <BsTwitch style={{ color: "white" }} />
                </Link>
                <Link href="/">
                  <BsTwitter style={{ color: "white" }} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ul className="text-sm space-y-3">
              <li>Agenda</li>
              <li>Games</li>
              <li>Books</li>
              <li>Shoes</li>
              <li>Articles</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-center my-4">
              <form>
                <input
                  type="text"
                  placeholder="Get updated"
                  className="rounded-full py-1 px-2"
                />
              </form>
              <button className="rounded-full ml-2 bg-purple-600 text-white font-semibold py-[2px] px-4 hover:bg-white hover:text-purple-600 ">
                Go
              </button>
            </div>
            <p className="capitalize text-xs text-center md:text-left">
              copyright &copy; {fecha}. all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
