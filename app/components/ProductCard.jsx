// "use client";

import Image from "next/image";
import React, { useContext } from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center shadow-sm p-10 m-5 relative z-30 ">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">
        {product.category}
      </p>
      <Image width={150} height={120} src={product.image} alt={product.name} />
      <p className="text-sm  mt-2 font-semibold">
        {product.title.slice(0, 20)}
      </p>
      <p className="text-xs font-normal italic mt-2 ">
        {product.description.slice(0, 100) + "..."}
      </p>
      <p className="text-lg font-bold mt-2 ">${product.price}</p>
      <button className="bg-orange-300 hover:bg-orange-400 mt-2 w-full text-black px-3 py-1 rounded-md ">
        Add to basket
      </button>
    </div>
  );
};

export default ProductCard;
