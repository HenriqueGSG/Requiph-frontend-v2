import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/dashboard/common/navbar/Navbar";
import SideBar from "./pages/dashboard/common/sidebar/SideBar";
import RoutesManager from "./setup/routes/RoutesManager";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalContextProvider } from "./setup/context/ModalContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/login/Login";
const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <RoutesManager />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
