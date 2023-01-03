import React, { useContext } from "react";
import { AiOutlineLike, AiOutlineDelete } from "react-icons/ai";
import { ModalContext } from "../../../../setup/context/ModalContext";
import Modal from "../../../../common/Modal";
import DeleteResume from "./modals/DeleteResume";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useLikeResume } from "../hooks/useResumes";

const TableButtons = ({ file, idResume, selected }) => {
  const { id: page } = useParams();
  const { showModal, setShowModal, setModalContent, modalContent } =
    useContext(ModalContext);

  const { mutate } = useLikeResume(idResume, page);

  const likeApi = async () => {
    const response = await Axios.patch(
      `http://localhost:8000/api/dashboard/resume/update/${idResume}/`,
      { selected: true }
    );
    console.log(response);
  };
  const handleLike = () => {
    mutate(idResume);
  };
  return (
    <div className="flex gap-2  justify-center">
      {/* <AiOutlineFilePdf className="h-8 w-8 rounded-full text-gray-500 bg-white p-1  shadow-sm" /> */}
      <button className="text-xs  px-2 lg:px-3 py-1 rounded-full lg:text-sm shadow-sm  font-semibold  bg-gray-600 text-white">
        Curriculo
      </button>
      {!selected && (
        <AiOutlineLike
          onClick={() => handleLike()}
          className="h-8 w-8 rounded-full text-green-500 bg-white p-1 shadow-sm hover:bg-green-500 hover:text-white transition duration-200 cursor-pointer"
        />
      )}
      <AiOutlineDelete
        onClick={() => {
          setShowModal(true),
            setModalContent(
              <DeleteResume
                setShowModal={setShowModal}
                idResume={idResume}
                idPage={page}
              />
            );
        }}
        className="h-8 w-8 rounded-full text-red-500 bg-white p-1  shadow-sm hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer"
      />
      <Modal />
    </div>
  );
};

export default TableButtons;
