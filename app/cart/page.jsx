"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { redirects } from "@/next.config";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/navigation";
const CartPage = () => {
  // const stripePromise = loadStripe(
  //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  // );
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const [data, setData] = useState([]);
  useEffect(() => {
    const reletedProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    };
    reletedProducts();
  }, []);
  console.log(cart);
  const router = useRouter();
  // stripe integration
  let stripePromise = Stripe || null;
  const getStipePromise = () => {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
    if (!stripePromise && !!key) {
      stripePromise = loadStripe(key);
    }
    return stripePromise;
  };
  const products = [
    {
      product: 1,
      name: "Stripe Product",
      price: 400,
      quantity: 3,
    },
    {
      product: 2,
      name: "Stripe Product2",
      price: 40,
      quantity: 2,
    },
    {
      product: 3,
      name: "Stripe Product23",
      price: 4000,
      quantity: 1,
    },
  ];
  const handleCheckout = async () => {
    try {
      const stripe = await getStipePromise();
      const response = await axios("/api/stripe-session", {
        method: "POST",
        data: JSON.stringify(cart),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      const data = response.data;
      router.push(data.session.url);
      // if (data.session) {
      //   stripe?.redirectToCheckout({ sessionId: data.session.id });
      //   // window.location.replace = data.session.url;
      // }
    } catch (error) {
      console.log(error);
    }
  };

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
            Subtotal ({cart.length}): ₹{total.toFixed(2)}
          </p>

          {cart.length > 0 && (
            <button
              className="bg-amber-300 text-black rounded-lg px-5 py-1 text-sm mt-4 w-fit"
              onClick={handleCheckout}
            >
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
