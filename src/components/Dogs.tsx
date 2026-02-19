import { useGetDogs } from "@/queries/Dogs";
import { useMemo } from "react";

export default function Dogs() {
  const { data } = useGetDogs();

  const dogs = useMemo(() => {
    if (!data?.data) return null;
    return data.data.slice(0, 5);
  }, [data]);

  if (!dogs?.length) return null;

  return (
    <div className="max-w-7xl mx-auto mt-5 mb-5 px-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {dogs.map((dog) => {
          const { name, description, hypoallergenic, life, male_weight, female_weight } =
            dog.attributes;

          return (
            <div
              key={dog.id}
              className="p-4 bg-slate-100 shadow-md rounded-md"
            >
              <h3 className="font-semibold text-lg mb-2">{name}</h3>

              <p className="text-sm text-slate-600 mb-3">{description}</p>

              <div className="text-sm space-y-1">
                <div><strong>Hypoallergenic:</strong> {hypoallergenic ? "Yes" : "No"}</div>
                <div><strong>Life:</strong> {life.min} - {life.max} years</div>
                <div><strong>Male weight:</strong> {male_weight.min} - {male_weight.max} kg</div>
                <div><strong>Female weight:</strong> {female_weight.min} - {female_weight.max} kg</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

}
