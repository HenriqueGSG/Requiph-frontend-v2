import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Axios from "axios";

const fetchVagaData = async (idVaga, headerConfig) => {
  const res = await Axios.get(
    `http://localhost:8000/api/dashboard/vaga/${idVaga}/`,
    { headers: headerConfig }
  );
  return res.data;
};
const deleteVaga = async (config) => {
  console.log(config);
  const res = await Axios.delete(
    `http://localhost:8000/api/dashboard/vaga/delete/${config.idVaga}/`,
    {
      headers: config.header,
    }
  );
  return res.data;
};

export const useVagaData = (idVaga, headerConfig) => {
  return useQuery(["vagaJob", idVaga], () =>
    fetchVagaData(idVaga, headerConfig)
  );
};

export const useDeleteVaga = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteVaga, {
    onSuccess: () => {
      queryClient.invalidateQueries(["jobsSideBar"]);
    },
  });
};
