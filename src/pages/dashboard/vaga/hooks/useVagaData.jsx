import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Axios from "axios";
const fetchVagaData = async (idVaga) => {
  const res = await Axios.get(
    `http://localhost:8000/api/dashboard/vaga/${idVaga}/`
  );
  return res.data;
};
const deleteVaga = async (idVaga) => {
  const res = await Axios.delete(
    `http://localhost:8000/api/dashboard/vaga/delete/${idVaga}/`
  );
  return res.data;
};

export const useVagaData = (idVaga) => {
  return useQuery(["vagaJob", idVaga], () => fetchVagaData(idVaga));
};
export const useDeleteVaga = (idVaga) => {
  const queryClient = useQueryClient();

  return useMutation(deleteVaga, {
    onSuccess: () => {
      queryClient.invalidateQueries(["jobsSideBar"]);
    },
  });
};
