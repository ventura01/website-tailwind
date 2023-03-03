import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col mt-12 p-6 md:px-36 space-y-12 md:w-1/2">
          <div>
            <h2 className="text-3xl text-justify mb-3 font-bold capitalize md:text-5xl md:text-left">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <div className="bg-purple-500 w-1/2 self-center h-1 rounded-xl my-8"></div>
            <p className="text-gray-700 text-justify tracking-tighter	md:tracking-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              optio adipisci reprehenderit consectetur deserunt illum unde
              doloremque sit corrupti deleniti impedit quas, id veritatis
              exercitationem maxime, et voluptatibus vel, ratione vitae esse ut!
              Alias, fugiat consequatur.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button />
          </div>
        </div>
        <div className="mt-12 md:w-1/2">
          <Image
            src={"/illustration-hero.svg"}
            alt="Hero-img"
            height={600}
            width={600}
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
