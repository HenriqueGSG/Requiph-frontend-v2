import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MdEmojiPeople } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = () => {
  const fetchVagas = async () => {
    const res = await Axios.get("http://localhost:8000/api/vaga/list/");
    return res.data;
  };
  const { data, isLoading } = useQuery(["jobListSite"], () => fetchVagas());

  if (isLoading === true) {
    return <h1>loading</h1>;
  }
  console.log(data);
  return (
    <section className="px-5 flex justify-center items-center flex-wrap gap-4 text-center py-16">
      {data.map((vaga) => (
        <div
          key={vaga.id}
          className="w-60 flex flex-col h-full shadow-lg items-center pb-3 bg-gray-100 rounded-b-lg relative"
        >
          {/* <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded">
            {vaga.created_at}
          </span> */}
          <div className="w-full h-36 bg-gray-50 items-center justify-center flex rounded-t-lg ">
            <span>
              <MdEmojiPeople className="w-16 h-16 text-red-500" />
            </span>
          </div>
          <span className="bg-gray-200 w-full font-semibold py-1">
            {vaga.role}
          </span>
          <div className=" h-24 pb-2 mt-2 overflow-auto bg-gray-100 w-full flex flex-col px-2 text-start">
            <span className=" font-semibold text-gray-600 text-sm sticky top-0 bg-gray-100 mb-1">
              Descrição:
            </span>
            <p className="px-2 text-sm text-gray-700 ">{vaga.description}</p>
          </div>
          <div className=" h-18 pb-1 pt-2 overflow-auto bg-gray-100 w-full flex flex-col px-2 text-start">
            <span className=" font-semibold text-gray-600 text-sm">
              Requisitos:
            </span>
            <p className="px-2 text-sm text-gray-700 ">{vaga.requirements}</p>
          </div>
          <p className="px-3  py-2 overflow-auto bg-gray-100 w-full"></p>
          <Link
            to={"/upload/"}
            className="bg-red-500 px-5 text-white font-semibold rounded-lg"
          >
            Aplicar
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Card;
