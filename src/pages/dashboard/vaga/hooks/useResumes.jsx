import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios from "axios";
const fetchResumesList = async (id) => {
  const res = await Axios.get(
    `http://localhost:8000/api/dashboard/vaga/resumes/${id}/`
  );
  return res.data;
};

const deleteResume = async (resumeId) => {
  const res = await Axios.delete(
    `http://localhost:8000/api/dashboard/resume/delete/${resumeId}/`
  );
  return res.data;
};

const likeResume = async (resumeId) => {
  const response = await Axios.patch(
    `http://localhost:8000/api/dashboard/resume/update/${resumeId}/`,
    { selected: true }
  );
  console.log(response);
};

export const useResumeFecth = (id) => {
  return useQuery([`resumesJob`, id], () => fetchResumesList(id));
};

export const useDeleteResume = (resumeId, idJob) => {
  const queryClient = useQueryClient();

  return useMutation(deleteResume, {
    onSuccess: () => {
      queryClient.invalidateQueries(["resumesJob", idJob]);
    },
  });
};

export const useLikeResume = (resumeId, idJob) => {
  const queryClient = useQueryClient();

  return useMutation(likeResume, {
    onSuccess: () => {
      queryClient.invalidateQueries(["resumesJob", idJob]);
    },
  });
};
