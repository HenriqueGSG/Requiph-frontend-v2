import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutesManager from "./setup/routes/RoutesManager";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./setup/auth/context/AuthContext";
const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <RoutesManager />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
