import React from "react";
import { AiOutlineLike, AiOutlineDelete } from "react-icons/ai";
const VagaTable = () => {
  return (
    <div className="flex flex-col gap-5 h-96 w-full overflow-auto pr-2">
      <div className="flex gap-10 justify-between py-2 lg:text-base text-xs ">
        <span className=" text-gray-500 w-3/12">Henrique Guarnieri</span>
        <span className=" text-gray-500 w-4/12">
          henriqueguarnieri.gg@gmail.com
        </span>
        <div className="flex gap-2 w-3/12 justify-end  items-center lg:items-start">
          {/* <AiOutlineFilePdf className="h-8 w-8 rounded-full text-gray-500 bg-white p-1  shadow-sm" /> */}
          <button className="text-xs  px-2 lg:px-3 py-1 rounded-full lg:text-sm shadow-sm  font-semibold  bg-gray-600 text-white">
            Curriculo
          </button>
          <AiOutlineLike className="h-8 w-8 rounded-full text-green-500 bg-white p-1 shadow-sm hover:bg-green-500 hover:text-white transition duration-200 cursor-pointer" />
          <AiOutlineDelete className="h-8 w-8 rounded-full text-red-500 bg-white p-1  shadow-sm hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer" />
        </div>
        <span className=" text-gray-500 w-2/12 text-end ">2022-12-27</span>
      </div>
    </div>
  );
};

export default VagaTable;
