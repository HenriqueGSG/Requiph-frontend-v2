import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { MdEditNote, MdOutlineDeleteSweep, MdRefresh } from "react-icons/md";
import TableTest from "./components/TableTest";
import { ModalContext } from "../../../setup/context/ModalContext";
import DeleteVaga from "./components/modals/DeleteVaga";
import EditVaga from "./components/modals/EditVaga";
import { useResumeFecth } from "./hooks/useResumes";
import { useVagaData } from "./hooks/useVagaData";
const VagaPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useVagaData(id);
  const { setShowModal, setModalContent } = useContext(ModalContext);
  const {
    data: resumesData,
    isLoading: isLoadingResume,
    refetch: refetchResumes,
  } = useResumeFecth(id);

  if (isLoading | isLoadingResume) {
    return <h1>Loading</h1>;
  }

  console.log(data);
  return (
    <>
      <div className="flex w-full flex-col  p-4 lg:p-10  bg-gray-100 overflow-auto">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold ">{data.job.role}</h1>
          <span className="text-gray-400 text-lg">{data.job.sector.name}</span>
        </div>
        <div className="flex py-5 gap-2">
          <button
            onClick={() => {
              setShowModal(true),
                setModalContent(
                  <EditVaga
                    setShowModal={setShowModal}
                    idVaga={data.job.id}
                    dataVaga={data}
                  />
                );
            }}
            className=" bg-white rounded-3xl flex  text-black px-5 py-1 items-center gap-1 hover:bg-red-600 hover:text-white shadow-sm "
          >
            <MdEditNote className="h-6 w-6" />
            <span>Editar</span>
          </button>
          <button
            onClick={() => {
              setShowModal(true),
                setModalContent(
                  <DeleteVaga
                    setShowModal={setShowModal}
                    idVaga={data.job.id}
                  />
                );
            }}
            className=" bg-white rounded-3xl flex  text-black px-5 py-1 items-center gap-1 hover:bg-red-600 hover:text-white shadow-sm  "
          >
            <MdOutlineDeleteSweep className="h-6 w-6" />
            <span>Deletar</span>
          </button>
        </div>
        <div className="flex flex-col gap-2 w-full mt-10 relative  ">
          <div className="flex items-center pb-2 border-b-2">
            <h2 className="text-3xl font-bold  ">Curriculos Recebidos</h2>
            <div
              onClick={() => refetchResumes}
              className="absolute right-1 text-sm flex items-center cursor-pointer"
            >
              <span className="text-md">Atualizar</span>
              <MdRefresh className="h-6 w-6" />
            </div>
          </div>
          <div className="h-80 overflow-auto">
            <TableTest
              dataTable={resumesData.filter((item) => item.selected === false)}
              idPage={id}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full mt-20 relative   ">
          <div className="flex items-center pb-2 border-b-2">
            <h2 className="text-3xl font-bold ">Curriculos Selecionados </h2>
            <span className="text-gray-400 absolute right-1 text-sm">
              Quantidade de curriculos: 3
            </span>
          </div>
          <div className="h-80 overflow-auto">
            <TableTest
              dataTable={resumesData.filter((item) => item.selected === true)}
              idPage={id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VagaPage;
