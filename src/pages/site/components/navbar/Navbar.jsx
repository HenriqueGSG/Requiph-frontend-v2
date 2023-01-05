import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/Ldy9FY2/Group-4.png"
            alt=""
          />
          <span className="ml-3 text-xl">Requiph</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className=" font-semibold mr-5 rounded px-2 hover:bg-red-500 hover:text-white">
            Home
          </a>
          <a className=" font-semibold mr-5 rounded px-2 hover:bg-red-500 hover:text-white">
            Sobre
          </a>
          <a className=" font-semibold mr-5 rounded px-2 hover:bg-red-500 hover:text-white">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
