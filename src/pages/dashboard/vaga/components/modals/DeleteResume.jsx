import React, { useContext } from "react";
import Axios from "axios";
import { useResumeFecth, useDeleteResume } from "../../hooks/useResumes";
import { QueryClient } from "@tanstack/react-query";
const DeleteResume = ({ setShowModal, idResume, idPage }) => {
  const { mutate } = useDeleteResume(idResume, idPage);
  const handleDeleteResume = () => {
    const id = idResume;
    mutate(idResume);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col w-full  text-center gap-4 h-44 justify-between px-5 py-5  ">
      <span className="text-3xl pb-2 border-b-2">
        Tem certeza que deseja deletar este curriculo?
      </span>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setShowModal(false)}
          className="px-5 py-1  shadow rounded-lg bg-gray-50"
        >
          Cancelar
        </button>
        <button
          onClick={() => handleDeleteResume()}
          className="px-5 py-1  text-white bg-red-600 shadow rounded-lg"
        >
          Deletar {idResume}
        </button>
      </div>
    </div>
  );
};

export default DeleteResume;
