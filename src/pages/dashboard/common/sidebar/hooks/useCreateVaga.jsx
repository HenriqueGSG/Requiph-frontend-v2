import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Axios from "axios";

const createVaga = async (vagaData) => {
  const res = await Axios.post(
    "http://localhost:8000/api/dashboard/vaga/create/",
    vagaData
  );
  return res.data;
};

export const useCreateVaga = () => {
  const queryClient = useQueryClient();

  return useMutation(createVaga, {
    onSuccess: () => {
      queryClient.invalidateQueries(["jobsSideBar"]);
    },
  });
};
