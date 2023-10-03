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
          <div className="flex flex-col lg:col-span-2 md:mb-0 mb-7 self-center">
            <h1 className="md:text-7xl md:text-left text-center text-6xl font-semibold mb-6 leading-snug">Experience the LuxeCosmetics Difference</h1>
            <p className="mb-4 md:text-left text-center max-w-xl">Step into a world of opulence with LuxeCosmetics. Our products are meticulously crafted using the finest ingredients, designed to deliver exceptional results. Elevate your beauty routine and pamper yourself with the essence of true luxury.</p>
            <Button className="btn-primary md:self-start self-center">Learn More</Button>
          </div>
          <div className="relative grid content-center">
            <div className="max-w-lg h-96 w-full relative justify-self-end before:h-14 before:w-14 before:rounded-lg before:bg-rich-blue before:absolute before:contents sm:before:right-full before:right-4 before:mr-4 lg:before:bottom-0 before:bottom-4 before:z-[1] lg:mb-0 mb-6">
              <Image src={bannerImageOne} layout="fill" className="rounded-3xl overflow-hidden object-cover" />
            </div>
            <div className="max-w-lg  h-96 w-full lg:-ms-4 mt-4 relative before:h-14 before:w-14 before:rounded-lg before:bg-rich-blue before:absolute before:contents sm:before:left-full before:left-4 before:ml-4 lg:before:top-0 before:top-4 before:z-[1]">
              <Image src={bannerImageTwo} layout="fill" className="rounded-3xl overflow-hidden object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
        <ProductFeed />
      </Suspense>
    </>
  );
}
export default Home
