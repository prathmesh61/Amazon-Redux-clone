import React from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";

const Product = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  // console.log(data);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.slice(0, 4).map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}

      <Image
        width={1280}
        height={300}
        priority
        className="md:col-span-full "
        src="https://links.papareact.com/dyz"
        alt="banner"
      />

      <div className="md:col-span-2">
        {data.slice(4, 5).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {data.slice(5, data.length).map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Product;
