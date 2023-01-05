import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios from "axios";
const fetchResumesList = async (id, headerConfig) => {
  console.log(headerConfig);
  const res = await Axios.get(
    `http://localhost:8000/api/dashboard/vaga/resumes/${id}/`,
    { headers: headerConfig }
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
};

export const useResumeFecth = (id, headerConfig) => {
  return useQuery([`resumesJob`, id], () => fetchResumesList(id, headerConfig));
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
