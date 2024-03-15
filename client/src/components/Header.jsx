import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar ">
        <h1 className="text-3xl lg:text-3xl Open Sans ">
          <span className="font-extrabold inline-block transform -rotate-2">
            XYZ
          </span>{' '}
          INDUSTRIES
        </h1>
        <ul className="nav-menu bg-slate-900 p-4 rounded-2xl ">
          <li className="my-2">
            <Link to="/">Home</Link>
          </li>
          <li className="my-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="my-2">
            <Link to="/property">Property</Link>
          </li>
          <li className="my-2">
            <Link to="/services">Services</Link>
          </li>
          <li className="my-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <button className="rounded-full px-4 py-2 bg-blue-500 text-white mr-4">
            Sign Up
          </button>
          <button className="rounded-full px-4 py-2 bg-blue-500 text-white mr-4">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
