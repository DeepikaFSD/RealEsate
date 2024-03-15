import React from 'react';
import Image from '../assets/img/house-banner.png';
import { FiChevronRight } from 'react-icons/fi';

const Banner = () => {
  return (
    <>
      <section className="h-full max-h-[3000px] mb-8 xl:mb-24 flex flex-col justify-center items-center mt-10">
        <h1 className="text-4xl lg:text-[58px] leading-none mb-6 text-center px-4 py-2 ">
          <span className="">CONNECTING DREAMS TO REALITY</span>
          <br />
          <span className="text-violet-700 ">YOUR PREMIER</span> <br />
          <span className=" ">REAL ESTATE MARKETPLACE</span>
        </h1>
        <p className="max-w-[480px] mb-8 text-lg text-center">
          where every search end with a home
        </p>
        <div className="nav-buttons mt-4">
          <button className="rounded-full px-4 py-2 bg-blue-500 text-white mr-4 w-60 h-15">
            Find Your Home
          </button>

          <button className="rounded-full px-4 py-2 bg-blue-500 text-white mr-4 w-60 h-15">
            List Your Property
          </button>
        </div>
        <img src={Image} alt="" className="w-screen h-600 object-cover mt-5" />

        <p className="text-8xl lg:text-[70px] mt-12 font-semibold leading-none  text-center px-4 py-2 ">
          How It Works ?{' '}
        </p>
        <h2 className="text-2xl">Step by Step Guide</h2>
      </section>
    </>
  );
};

export default Banner;
