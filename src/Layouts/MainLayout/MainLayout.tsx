import Dogs from "@/components/Dogs";
import UserCard from "@/components/UserCard";

function MainLayout() {
  return (
    <main className="w-full">
      <UserCard />
      <Dogs />
    </main>
  );
}

export default MainLayout;
