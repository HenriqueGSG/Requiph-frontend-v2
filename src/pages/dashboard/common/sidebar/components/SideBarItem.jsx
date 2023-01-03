import React from "react";
import { useParams, NavLink } from "react-router-dom";

const SideBarItem = ({ item }) => {
  return (
    <NavLink
      to={`vaga/${item.id}`}
      className={`w-full  py-3 bg-white rounded flex-col  flex justify-start items-center shadow relative hover:bg-red-600 group transition duration-300 `}
    >
      <span className="text-gray-600 font-semibold text-lg group-hover:text-white transition duration-300 ">
        {item.role}
      </span>
      {/* <span className="text-white font-semibold text-sm absolute bottom-0  bg-red-600 w-full text-center">
        {item.sector}
      </span> */}
      <span className=" text-xs text-gray-400 group-hover:text-gray-100 transition duration-300">
        {item.sector}
      </span>
    </NavLink>
  );
};

export default SideBarItem;
