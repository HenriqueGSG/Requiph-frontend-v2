import React from "react";
import { Routes, Route } from "react-router-dom";
import VagaPage from "../../pages/dashboard/vaga/VagaPage";
import HomeDash from "../../pages/dashboard/home/HomeDash";
import Login from "../../pages/login/Login";
import Navbar from "../../pages/dashboard/common/navbar/Navbar";
import SideBar from "../../pages/dashboard/common/sidebar/SideBar";
import { ModalContextProvider } from "../context/ModalContext";
import PrivateRouter from "../auth/utils/PrivateRouter";
import Home from "../../pages/site/home/Home";
import PdfForm from "../../pages/site/components/form/PdfForm";
const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<PdfForm />} />
      <Route path="/dashboard/login" element={<Login />} />
      <Route
        path="/dashboard//*"
        element={
          <PrivateRouter>
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
          </PrivateRouter>
        }
      />
    </Routes>
  );
};

export default RoutesManager;
