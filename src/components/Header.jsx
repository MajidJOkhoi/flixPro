import React from 'react';
import logo from '../assets/logo.jpg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
 

  return (
    <>
      <div className="relative z-10 flex justify-between items-center px-8 py-6">
       
       
        <Link to={'/'}>
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-24 h-16" />
          </div>
        </Link>

        <Link to="/login">
          <button className="bg-red-600 text-white px-6 py-2 text-lg font-semibold rounded">
            Sign In
          </button>
        </Link>
      </div>

     </>
  );
};

export default Header;
