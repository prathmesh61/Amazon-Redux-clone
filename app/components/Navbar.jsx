"use client";
import React from "react";
import Image from "next/image";
import amazon1 from "../assets/amazon1.png";
import { HiLanguage } from "react-icons/hi2";
import { HiOutlineMap } from "react-icons/hi2";
import { BiMap } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillAmazonSquare } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { useSelector } from "react-redux";
import Link from "next/link";
const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <div className="flex justify-between items-center h-16 bg-[#131A22] gap-4 max-w-full mx-auto  px-6">
        <Link href={"/"} className="w-10 h-8 flex items-center  ">
          <AiFillAmazonSquare className="w-16 text-white h-16" />
        </Link>
        <div className="flex flex-grow  ">
          <input
            type="text"
            className="px-4 py-1 md-py-2 flex-grow  bg-slate-100  w-[50%] md:w-[70%] rounded-l-lg"
            placeholder="Search for products,brands and more"
          />
          <button className="bg-orange-300  text-black px-4 py-1 md:py-1 rounded-r-lg">
            Search
          </button>
        </div>
        <div className=" justify-center items-center hidden lg:flex gap-8 ">
          <div className="flex-col justify-start gap-2">
            <p className="font-normal text-sm text-white">Hello </p>
            <p className="font-bold text-sm flex justify-center items-center gap-2 text-white ">
              Select Your Address
              <BiMap className="text-white w-4 h-4 " />
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <HiLanguage className="text-white w-4 h-4" />
            <p className="font-bold text-sm text-white">EN</p>
          </div>
          <div className="flex-col justify-start gap-2">
            <p className="font-normal text-sm text-white">Hello,Sign in </p>
            <p className="font-bold text-sm text-white flex justify-center items-center">
              Account & List
              <MdKeyboardArrowDown className="text-white w-4 h-4" />
            </p>
          </div>
          <Link
            href={"/cart"}
            className="flex justify-center items-center space-x-2"
          >
            <AiOutlineShoppingCart className="text-white w-8 h-8 cursor-pointer" />
            <p className="font-bold text-xs text-white cursor-pointer">
              Cart {cart.length}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex justify-start items-center h-8 bg-[#232F3E] gap-4 max-w-full mx-auto  px-6">
        <p className="text-bold sm:text-sm text-[8px] text-white space-x-1 flex justify-center items-center ">
          All
        </p>
        <p className="text-bold sm:text-sm text-[8px] text-white space-x-1">
          Sell
        </p>
        <p className="text-bold sm:text-sm text-[8px] text-white space-x-1">
          Brand
        </p>
        <p className="text-bold sm:text-sm text-[8px] text-white space-x-1">
          Mobile's
        </p>
        <p className="text-bold sm:text-sm text-[8px] text-white space-x-1">
          Prime
        </p>
        <p className="text-bold sm:text-sm text-[8px] text-white space-x-1">
          Best Seller
        </p>
        <p className="text-bold sm:text-sm text-[8px] text-white space-x-1">
          Amazon Pay
        </p>
      </div>
    </>
  );
};

export default Navbar;
