import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./Layouts/MainLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  );
}

export default App;
