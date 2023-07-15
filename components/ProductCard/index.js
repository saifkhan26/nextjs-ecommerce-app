"use client";
import Image from "next/image";

export default function ProductCard({
  brand,
  category,
  description,
  image,
  name,
  price,
}) {
  return (
    <div className="bg-white rounded-3xl p-7">
      <div className="h-60 relative bg-bright-rose rounded-3xl">
        <Image src={''} layout="fill"/>
      </div>
      <div className="grid grid-cols-3 mt-6">
        <div className="col-span-2">
          <p className="text-2xl mb-4">{name}</p>
          <p className="text-sm">{description}</p>
        </div>
        <div className="self-end justify-self-end">
          <button className="btn-primary">Add To Cart</button>
        </div>
      </div>
    </div> 
  );
}
