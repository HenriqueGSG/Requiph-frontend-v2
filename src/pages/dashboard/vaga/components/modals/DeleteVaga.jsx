import React, { useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDeleteVaga } from "../../hooks/useVagaData";
import AuthContext from "../../../../../setup/auth/context/AuthContext";

const DeleteVaga = ({ setShowModal, idVaga }) => {
  const { headerConfig } = useContext(AuthContext);
  const { mutate } = useDeleteVaga();
  const navigate = useNavigate();
  const handleDeleteVaga = () => {
    console.log(headerConfig);
    mutate({ idVaga: idVaga, header: headerConfig });
    setShowModal(false);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col w-full  text-center gap-4 h-44 justify-between px-5 py-5  ">
      <span className="text-3xl pb-2 border-b-2">
        Tem certeza que deseja deletar esta vaga?
      </span>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setShowModal(false)}
          className="px-5 py-1  shadow rounded-lg bg-gray-50"
        >
          Cancelar
        </button>
        <button
          onClick={() => handleDeleteVaga()}
          className="px-5 py-1  text-white bg-red-600 shadow rounded-lg"
        >
          Deletar {idVaga}
        </button>
      </div>
    </div>
  );
};

export default DeleteVaga;
