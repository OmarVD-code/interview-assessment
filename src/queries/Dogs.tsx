import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

interface GetDogResponse {
    data: {
        id: string;
        attributes: {
            name: string;
            description: string;
            hypoallergenic: boolean;
            life: { min: number; max: number };
            male_weight: { min: number; max: number };
            female_weight: { min: number; max: number };
        };
    }[];
}

export const useGetDogs = () => {
    const getDogs = (): Promise<GetDogResponse> => {
        return api
            .get("https://dogapi.dog/api/v2/breeds?page[size]=5")
            .then((res) => res.data);
    };

    return useQuery({ queryKey: ["dogs"], queryFn: () => getDogs(), retry: 1 });
};
