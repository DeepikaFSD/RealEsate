import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/subscribe', { email });
      alert(response.data.message);
      setEmail('');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <footer className="bg-blue-400 py-2 text-center text-white mt-32">
      <section>
        <div className="flex mt-32 will-change-auto">
          <div className="p-4">
            <div className="p-4">
              <h2 className="text-4xl font-bold mb-4">XYZ Industries:</h2>
              <p className="text-xl">
                <span className="text-lg"> XYZ</span>
                Industries where real estate dreams meet seamless transactions,
                transforming aspirations into achievements.
              </p>
              <button className="px-8 py-2 text-white mt-5 mr-4  border-2 border-white rounded">
                Explore
              </button>
            </div>
          </div>

          <div className="p-4 w-auto ">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <p className="text-xl">About Us</p>
            <p className="text-xl">Blog</p>
            <p className="text-xl">Testimonials</p>
            <p className="text-xl">Terms and Conditions</p>
            <p className="text-xl">Privacy Policy</p>
            <p className="text-xl">Site Map</p>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Customer Support</h2>
            <p className="text-xl">Feedback</p>
            <p className="text-xl">Report a Problem</p>
            <p className="text-xl">Request a Call Back</p>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Subscribe Us</h2>
            <h2 className="text-xl font-bold mb-4">
              Subscribe to our weekly newsletter
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="your@emsail.com"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
                className="py-2 px-4 mr-2 mb-4 md:mb-0 md:mr-4 w-full md:w-64 bg-white text-black  rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-800 py-2 px-4 rounded-md mt-5 w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border border-white"></div>
        <div className="flex justify-between mt-5 ml-5">
          <div className="flex">
            <FaFacebook size={32} className="mr-4" />
            <FaTwitter size={32} className="mr-4" />
            <FaInstagram size={32} className="mr-4" />
            <FaLinkedin size={32} className="mr-4" />
          </div>
          <div className="text-white text-md">
            <span className="">Terms and Privacy</span>
            <span className="ml-2">@ 2024</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
