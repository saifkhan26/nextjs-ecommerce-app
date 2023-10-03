'use client'
import ProductCard from "../ProductCard";
import { useGetAllProductsQuery } from "../../services/products";
import Loading from "../../app/loading";

export default function ProductFeed () {
  const {data : products, error, isLoading} = useGetAllProductsQuery()
  return(
    <section className="bg-lavender-blush py-12 px-24 relative">
        <h1 className="text-6xl font-semibold capitalize mb-10 text-center">Products</h1>
      {
        isLoading ? <Loading/> :
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 gap-y-8">
        {products?.map((item) => (
          <ProductCard {...item} key={item?._id}/>
        ))}
      </div>
      }
    </section>
  )
}
