import { Suspense } from 'react';
import Loading from './loading'
import ProductFeed from '../components/ProductFeed'
import { Button } from '../components/Button';
import bannerImageOne from '../public/images/image 7.png'
import bannerImageTwo from '../public/images/image 8.png'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <section className="w-full min-h-screen py-10 grid justify-center">
        <div className="md:px-24 p-4 grid lg:grid-cols-3">
          <div className="flex flex-col lg:col-span-2 md:mb-0 mb-7">
            <h1 className="md:text-7xl md:text-left text-center text-6xl font-semibold mb-6 leading-snug">Experience the LuxeCosmetics Difference</h1>
            <p className="mb-4 md:text-left text-center max-w-xl">Step into a world of opulence with LuxeCosmetics. Our products are meticulously crafted using the finest ingredients, designed to deliver exceptional results. Elevate your beauty routine and pamper yourself with the essence of true luxury.</p>
            <Button className="btn-primary md:self-start self-center">Learn More</Button>
          </div>
          <div className="relative grid">
            <div className="h-96 w-96 relative justify-self-end before:h-14 before:w-14 before:rounded-lg before:bg-rich-blue before:absolute before:contents before:right-full before:mr-4 before:bottom-0 before:z-0 lg:mb-0 mb-6">
              <Image src={bannerImageOne} layout="fill" className="rounded-3xl overflow-hidden"/>
            </div>
            <div className="h-96 w-96 lg:absolute relative  lg:right-3/4 lg:top-2/4 before:h-14 before:w-14 before:rounded-lg before:bg-rich-blue before:absolute before:contents before:left-full before:ml-4 before:top-0 before:z-0">
              <Image src={bannerImageTwo} layout="fill" className="rounded-3xl overflow-hidden"/>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loading/>}>
        <ProductFeed />
      </Suspense>
    </>
  );
}
export default Home
