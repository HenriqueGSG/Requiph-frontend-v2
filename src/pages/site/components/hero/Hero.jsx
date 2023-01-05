import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full px-5 py-5">
      <div className=" h-full w-full  bg-[url('https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center relative flex justify-center items-center text-center  ">
        <div className="bg-gray-800 absolute w-full h-full opacity-60"></div>
        <div className="z-40 text-white flex flex-col items-center gap-5 bg-black bg-opacity-30 px-32 py-16">
          <h1 className="text-7xl font-bold pb-2 border-b-2">
            35 Anos no mercado
          </h1>
          <div className="flex gap-5">
            <button className="bg-red-600 px-4 py-2 w-44 rounded-lg hover:bg-white hover:text-black">
              Entrar em contato
            </button>
            <button className="bg-gray-800 px-4 py-2 w-44 rounded-lg hover:bg-white hover:text-black  ">
              Carreiras
            </button>
          </div>
        </div>
        {/* <BsFillArrowDownCircleFill className="absolute bottom-5 w-14 h-14 text-white" /> */}
      </div>
    </div>
  );
};

export default Hero;
