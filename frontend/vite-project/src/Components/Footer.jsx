import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-base">
        {/*-----------left side---------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ut,
            ab porro voluptatibus tempora quod reprehenderit ipsum ipsa corrupti
            consectetur sequi. Nobis, ad sapiente? Soluta ea neque obcaecati
            facilis eius, ducimus iure libero non provident distinctio magni.
            Consequatur error nobis quam reiciendis, facilis, tenetur ut
            praesentium nemo ab dolorum alias?
          </p>
        </div>
        {/*----------- center side---------- */}
        <div className="text-xl font-medium mb-5">
          <p>COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*-----------Right side---------- */}
        <div className="text-xl font-medium mb-5">
          <p>GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>+2502-3202-52</li>
            <li>hospitially@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copy right text */}
      <div>
        <hr />
        <p className="py-10 text-base text-center">
          Copyright 2024@ prescripto - All Right Reversed.
        </p>
      </div>
    </div>
  );
};

export default Footer;
