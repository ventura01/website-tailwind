import React from "react";
import {
  MdDateRange,
  MdVerifiedUser,
  MdForum,
  MdOutlineAssignmentInd,
} from "react-icons/md";

const Features = () => {
  return (
    <section id="features">
        <div className="mt-24 mb-10 text-center">
          <h2 className="capitalize text-3xl font-bold md:text-4xl">
            our skills
          </h2>
          <p className="my-4 text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        {/* <div className="bg-purple-500 w-1/2 self-center h-1 rounded-xl my-8"></div> */}
        <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col p-12">
            <MdDateRange className="self-center" size="3rem" color="gray" />
            <h3 className="text-2xl my-3 font-semibold text-center">Lorem ipsum dolor sit.</h3>
            <p className="text-slate-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam
              a possimus optio ex pariatur asperiores?
            </p>
          </div>
          <div className="flex flex-col p-12">
            <MdVerifiedUser className="self-center" size="3rem" color="gray" />
            <h3 className="text-2xl my-3 font-semibold text-center">Lorem ipsum dolor sit.</h3>
            <p className="text-slate-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam
              a possimus optio ex pariatur asperiores?
            </p>
          </div>
          <div className="flex flex-col p-12">
            <MdForum className="self-center" size="3rem" color="gray" />
            <h3 className="text-2xl my-3 font-semibold text-center">Lorem ipsum dolor sit.</h3>
            <p className="text-slate-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam
              a possimus optio ex pariatur asperiores?
            </p>
          </div>
          <div className="flex flex-col p-12">
            <MdOutlineAssignmentInd className="self-center" size="3rem" color="gray" />
            <h3 className="text-2xl my-3 font-semibold text-center">Lorem ipsum dolor sit.</h3>
            <p className="text-slate-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam
              a possimus optio ex pariatur asperiores?
            </p>
          </div>
        </div>
    </section>
  );
};

export default Features;
