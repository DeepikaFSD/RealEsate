import React from 'react';
import houseseach from '../assets/img/houses/search.jpeg';
import showhouse from '../assets/img/houses/showcase.jpeg';
import connectImg from '../assets/img/houses/connect.jpeg';
import secureImg from '../assets/img/houses/barcode.jpeg';
import BannerImgBottom from '../assets/img/houses/house10.png';

const HouseList = () => {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="w-300 h-200 p-32 bg-gray-200 rounded-lg">
          <img src={houseseach} alt="Description of image" className="w-full" />
        </div>

        <div className="w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-4">
            Discover Your Perfect Home
          </h2>
          <p className="text-xl">
            Use our advanced filters to narrow down your search. Specify
            everything from location to amenities, ensuring you find the
            property that feels right
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-4">Showcase your property</h2>
          <p className="text-xl">
            List your property with is fill in detailed forms to highlight every
            feature attracting the perfect by a directly
          </p>
        </div>

        <div className="w-300 h-200 p-32 bg-gray-200 rounded-lg">
          <img src={showhouse} alt="Description of image" className="w-full" />
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="p-32 w-300 h-200 bg-gray-200 rounded-lg">
          <img src={connectImg} alt="Description of image" />
        </div>

        <div className="w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-4">Connect and communicate</h2>
          <p className="text-xl">
            Our platform facilitate direct communication between buyer and
            seller making negotiations transparent and straight forward
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-4">Seal the deal securely</h2>
          <p className="text-xl">
            Advance payments made safe secure your agreement with confidence and
            steps closer to your Dream property
          </p>
        </div>

        <div className="p-32 bg-gray-200 rounded-lg">
          <img src={secureImg} alt="Description of image" className="w-full" />
        </div>
      </section>
      <section>
        <p className="text-8xl lg:text-[80px] mt-12 font-semibold leading-none  text-center px-4 py-2 ">
          WHY CHOOSE XYZ?
        </p>

        <div className="flex mt-32">
          <div className="w-1/2 p-4 relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-400"></div>
            <div className="flex flex-col  items-start mb-4">
              <span className="text-8xl font-bold mr-2">01</span>
              <div>
                <h2 className="text-4xl ">SEARCH AND FILTERS</h2>
              </div>
            </div>
            <div className="bg-blue-400 w-4 h-4 mt-8"></div>
            <p className="text-lg mt-8">
              Tailored Searches to meet your needs. Find what you're looking for
              with precision.
            </p>
          </div>
          <div className="w-1/2 p-4 relative" style={{ marginTop: '100px' }}>
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-400"></div>
            <div className="flex flex-col  items-start mb-4">
              <span className="text-8xl font-bold mr-2">02</span>
              <div>
                <h2 className="text-4xl ">DETAILED LISTINGS</h2>
              </div>
            </div>
            <div className="bg-blue-400 w-4 h-4 mt-8"></div>
            <p className="text-lg mt-8">
              Every Detail Matters. Sellers can list and buyers can explore
              properties that meet their exact specifications.
            </p>
          </div>
          <div className="w-1/2 p-4 relative" style={{ marginTop: '200px' }}>
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-400"></div>
            <div className="flex flex-col  items-start mb-4">
              <span className="text-8xl font-bold mr-2">03</span>
              <div>
                <h2 className="text-4xl ">DIRECT MESSAGING</h2>
              </div>
            </div>
            <div className="bg-blue-400 w-4 h-4 mt-8"></div>
            <p className="text-lg mt-8">
              Seamless Communication. Connect directly with sellers or buyers to
              ask questions, negotiate and make decisions.
            </p>
          </div>
          <div className="w-1/2 p-4 relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-400"></div>
            <div className="flex flex-col  items-start mb-4">
              <span className="text-8xl font-bold mr-2">04</span>
              <div>
                <h2 className="text-4xl ">SECURE PAYMENTS</h2>
              </div>
            </div>
            <div className="bg-blue-400 w-4 h-4 mt-8"></div>
            <p className="text-lg mt-8">
              Trust in Every Transaction. Our secure payment system ensure your
              piece for mind.
            </p>
          </div>
        </div>
      </section>

      <section className=" flex items-center justify-center">
        <img
          src={BannerImgBottom}
          alt=""
          className="w-screen h-600 object-cover mt-5"
        />
      </section>
    </>
  );
};

export default HouseList;
