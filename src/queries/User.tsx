import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

interface GetUserResponse {
  results: {
    email: string;
    name: { title: string; first: string; last: string };
    picture: { medium: string };
  }[];
}

export const useGetUsers = () => {
  const getUsers = (): Promise<GetUserResponse> => {
    return api.get("https://randomuser.me/api/").then((res) => res.data);
  };

  return useQuery({ queryKey: ["user"], queryFn: () => getUsers(), retry: 1 });
};
