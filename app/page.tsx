"use client";
import ProductPage from "@/components/ProductPage";
import { products } from "@/constants";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  return (
    <main className="flex items-center justify-center w-screen min-h-screen overflow-x-hidden">
      <div className="absolute w-full h-full inset-0 left-0 top-0 bg-black opacity-50" />
      <ProductPage
        images={currentProduct.images}
        name={currentProduct.name}
        price={currentProduct.price}
        desc={currentProduct.description}
      />
    </main>
  );
}
