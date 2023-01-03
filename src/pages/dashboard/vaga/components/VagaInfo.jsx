import React from "react";

const VagaInfo = ({ vagaInfo, resumesCount }) => {
  return (
    <>
      <div className="flex  w-4/12 flex-col gap-1 bg-white px-2 py-5 shadow rounded text-lg items-center  justify-start">
        {/* Basic information  abou role */}
        <div className="flex gap-1 lg:flex-row flex-col ">
          <span className=" font-semibold ">Função: </span>
          <span className=" ">{vagaInfo.role}</span>
        </div>
        <div className="flex  gap-1 lg:flex-row flex-col ">
          <span className="  font-semibold">Setor: </span>

          <span className=" ">{vagaInfo.sector.name}</span>
        </div>
        <div className="flex  gap-1 lg:flex-row flex-col ">
          <span className="  font-semibold">Empresa: </span>

          <span className=" ">{vagaInfo.company.name}</span>
        </div>
      </div>
      <div className=" w-4/12 bg-white px-4 flex flex-col items-center gap-2 py-5 shadow rounded   justify-start item">
        {/* Description about the role */}
        <span className="font-bold text-2xl">Descrição</span>
        <span className="">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </span>
      </div>
      <div className="w-4/12 bg-white  px-5 flex flex-col items-center  shadow rounded  gap-2 py-5  justify-start">
        {/* Quantity of resumes */}
        <span className="font-bold text-2xl">Quantidade de curriculos</span>
        <span className=" text-3xl">{resumesCount}</span>
      </div>
    </>
  );
};

export default VagaInfo;
