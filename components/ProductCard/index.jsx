"use client";
import Image from "next/image";

const ProductCard = ({
  brand,
  category,
  description,
  image,
  name,
  price,
}) => {
  return (
    <div className="bg-white rounded-3xl p-7">
      <div className="h-60 relative bg-bright-rose rounded-3xl overflow-hidden">
        <Image src={image} layout="fill" className="object-cover object-center"/>
      </div>
      <div className="flex justify-between mt-6">
        <div className="">
          <p className="text-2xl mb-4">{name}</p>
          <p className="text-sm truncate">{description}</p>
        </div>
        <div className="self-end">
          <button className="btn-primary">Add To Cart</button>
        </div>
      </div>
    </div> 
  );
}
export default ProductCard
