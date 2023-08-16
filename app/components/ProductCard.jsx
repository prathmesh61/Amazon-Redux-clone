"use client";

import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { toast } from "react-toastify";
const ProductCard = ({ product }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div
      className="bg-white flex flex-col justify-center items-center shadow-sm p-10 m-5 relative z-30 "
      key={product?.id}
    >
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">
        {product.category}
      </p>
      <Image
        width={150}
        height={120}
        src={product.image}
        alt={product.title}
        className="h-auto w-auto"
      />
      <p className="text-sm  mt-2 font-semibold">
        {product.title.slice(0, 20)}
      </p>
      <p className="text-xs font-normal italic mt-2 ">
        {product.description.slice(0, 100) + "..."}
      </p>
      <p className="text-lg font-bold mt-2 ">₹{product.price.toFixed(2)}</p>
      <button
        className="bg-orange-300 hover:bg-orange-400 mt-2 w-full text-black px-3 py-1 rounded-md "
        onClick={() =>
          dispatch(addToCart(product), toast.success("Product added to cart"))
        }
      >
        Add to basket
      </button>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default ProductCard;
