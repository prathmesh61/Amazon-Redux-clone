"use client";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/features/cartSlice";
import { toast } from "react-toastify";

const CartProduct = ({ cart }) => {
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <div className="p-10 flex md:flex-row justify-between items-center w-full rounded-md shadow-lg flex-col">
      <img src={cart?.image} className="w-[80px] h-[80px]" alt="" />
      <div className="flex flex-col justify-start items-start">
        <p className="text-2xl font-normal text-left">
          {cart?.title.slice(0, 20)}
        </p>
        <p className="font-bold ">
          ${cart?.price} X {cart?.quantity} = ${cart?.price * cart?.quantity}
        </p>
        <p className="font-normal text-sm">
          <span className="text-green-500 font-bold">In stock</span> <br />
          Eligible for FREE Shipping
        </p>
      </div>
      <button
        className="bg-red-500 text-white px-5 py-1 rounded-md"
        onClick={() =>
          dispatch(removeFromCart(cart), toast.error("Item removed from cart"))
        }
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
