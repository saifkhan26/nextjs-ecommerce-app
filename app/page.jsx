"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "@store/slices/productSlice";
import ProductCard from "@components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <section className="w-full min-h-screen px-24">
        <p>Hero Section</p>
      </section>
      <section className="bg-lavender-blush py-12 px-24">
        <div className="grid grid-cols-3">
          {products?.map((item) => (
            <ProductCard {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
