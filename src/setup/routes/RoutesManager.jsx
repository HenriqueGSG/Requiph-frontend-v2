import React from "react";
import { Routes, Route } from "react-router-dom";
import VagaPage from "../../pages/dashboard/vaga/VagaPage";
import HomeDash from "../../pages/dashboard/home/HomeDash";
import Login from "../../pages/login/Login";
import Navbar from "../../pages/dashboard/common/navbar/Navbar";
import SideBar from "../../pages/dashboard/common/sidebar/SideBar";
import { ModalContextProvider } from "../context/ModalContext";
const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/dashboard/login" element={<Login />} />
      <Route
        path="/dashboard//*"
        element={
          <section className="w-full h-screen flex flex-col ">
            <Navbar />
            <div className="w-full h-full overflow-auto flex">
              <ModalContextProvider>
                <SideBar />
                <Routes>
                  <Route path="" element={<HomeDash />} />
                  <Route path="/vaga/:id" element={<VagaPage />} />
                </Routes>
              </ModalContextProvider>
            </div>
          </section>
        }
      />
    </Routes>
  );
};

export default RoutesManager;
