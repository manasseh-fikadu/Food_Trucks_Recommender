// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient"></div>
      </div>
      <h1 className="text-3xl font-bold relative z-10">Food Truck Finder</h1>
    </header>
  );
};

export default Header;
