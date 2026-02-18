import { useGetUsers } from "@/queries/User";
import { useMemo } from "react";

export default function UserCard() {
  const { data } = useGetUsers();

  const user = useMemo(() => {
    if (!data?.results) return null;
    return data.results[0];
  }, [data]);

  if (!user) return null;

  return (
    <div className="w-[400px] mx-auto text-center shadow-md rounded-md p-4 mt-10 bg-slate-100">
      <div className="flex justify-center mb-3">
        <img src={user?.picture.medium} style={{ borderRadius: "50%" }} alt="Profile" />
      </div>
      <div className="text-sm text-slate-500">{user?.email}</div>
      <div className="text-md">
        {user.name.first} {user.name.last}
      </div>
    </div>
  );
}
