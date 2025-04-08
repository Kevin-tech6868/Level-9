import React from "react";
import Image from "../assets/OIP__15_-removebg-preview.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-800 text-white flex justify-between items-center p-8">
      <div className="flex items-center space-x-4">
      <img src={Image} alt="Logo" className="w-16 h-16 rounded-full" />

      <h1 className="text-4xl font-bold">VOLKSWAGEN</h1>
      </div>
      

      <nav>
        <ul className="flex space-x-6 text-lg">
          <Link to="/">
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Home
          </li></Link>
          
          <Link to="/about"><li className="hover:text-red-500 cursor-pointer transition duration-300">
            About
          </li></Link>
          <Link to="/contact"><li className="hover:text-red-500 cursor-pointer transition duration-300">
            Contact
          </li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
