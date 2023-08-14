"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { useEffect } from "react";
import { removeFromCart } from "../redux/features/cartSlice";
import ProductCard from "../components/ProductCard";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    const reletedProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    };
    reletedProducts();
  }, []);

  return (
    <div className="grid  lg:grid-cols-6  gap-2 w-full  px-16">
      <div className="cart col-span-1  lg:col-span-4   w-full p-10">
        <div className="bg-white flex flex-col  justify-center items-center gap-4 ">
          {cart.map((item) => (
            <CartProduct cart={item} />
          ))}
        </div>
      </div>
      <div className="total col-span-1 lg:col-span-2  p-20 shadow-lg rounded-md w-fit h-fit">
        <div className="flex flex-col">
          <p className="text-black text-sm">
            <span className="text-emerald-500 font-extrabold">
              Your order is eligible for FREE Delivery.
            </span>
            <br /> Select this option at checkout
          </p>
          <p className="text-xl font-bold">
            Subtotal ({cart.length}): ${total.toFixed(1)}
          </p>

          {cart.length > 0 && (
            <button className="bg-amber-300 text-black rounded-lg px-5 py-1 text-sm mt-4 w-fit">
              Procced to checkout
            </button>
          )}
          {cart.length > 0 && (
            <p className="text-sm  font-semibold font-mono mt-8">
              Customers who shopped:-
            </p>
          )}
          <div className="mt-2 flex flex-col">
            {cart.length > 0 &&
              data
                .slice(5, 8)
                .map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
