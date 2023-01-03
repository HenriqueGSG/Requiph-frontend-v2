import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-500 text-white  text-center flex justify-center items-center relative py-2">
      <span className="font-semibold text-lg">Henrique Guarnieri</span>
      <button className=" bg-white px-4 py-0.5 text-red-700 absolute right-5 rounded-full font-semibold ">
        Sair
      </button>
    </div>
  );
};

export default Navbar;
