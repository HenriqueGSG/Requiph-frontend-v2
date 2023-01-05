import React, { useContext } from "react";
import { MdAddBox } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import SideBarItem from "./components/SideBarItem";
import { ModalContext } from "../../../../setup/context/ModalContext";
import Modal from "../../../../common/Modal";
import CreateVagaForm from "../forms/CreateVagaForm";
import { useParams } from "react-router-dom";
import AuthContext from "../../../../setup/auth/context/AuthContext";
const SideBar = () => {
  const { authTokens, headerConfig } = useContext(AuthContext);

  const fetchVagasSideBar = async () => {
    const res = await Axios.get(
      "http://localhost:8000/api/dashboard/vaga/list/",
      {
        headers: headerConfig,
      }
    );
    console.log(res);
    return res.data;
  };

  const { data, isLoading } = useQuery(["jobsSideBar"], () =>
    fetchVagasSideBar()
  );

  const { showModal, setShowModal, setModalContent, modalContent } =
    useContext(ModalContext);

  if (isLoading) {
    return (
      <div className="bg-gray-300 w-60 flex flex-col items-center">
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className=" w-60 lg:w-72 bg-gray-200  flex flex-col items-center p-2 gap-3  overflow-auto h-full ">
      <img
        src="https://i.ibb.co/pjh5N4b/Group-5.png"
        alt="Group-5"
        border="0"
        className="my-2    border-b-2 border-gray-500  p-4"
      />
      <span className="font-bold  px-5 py-1 text-gray-600 rounded  ">
        Vagas Abertas
      </span>
      {data
        ? data.map((item) => <SideBarItem key={item.id} item={item} />)
        : "Nenhuma vaga"}
      <button
        onClick={() => {
          setShowModal(true),
            setModalContent(<CreateVagaForm setShowModal={setShowModal} />);
        }}
        className=" text-5xl text-gray-700 mt-5"
      >
        <MdAddBox />
      </button>
      <Modal showModal={showModal}>
        {/* <CreateVagaForm setShowModal={setShowModal} /> */}
      </Modal>
    </div>
  );
};

export default SideBar;
