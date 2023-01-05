import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/cards/Card";

const Home = () => {
  // const fetchVagas = async () => {
  //   const res = await Axios.get("http://localhost:8000/api/vaga/list/");
  //   return res.data;
  // };
  // const { data, isLoading } = useQuery(["jobListSite"], () => fetchVagas());

  // if (isLoading === true) {
  //   return <h1>loading</h1>;
  // }
  // console.log(data);
  return (
    <>
      <Navbar />
      <div className="   md:py-6   lg:pt-32 lg:pb-14  bg-gray-50 flex justify-center items-end pr-32">
        <div className="w-11/12 pr-4  ">
          <span className="text-4xl md:text-5xl lg:text-7xl text-red-500 font-semibold relative">
            Requiph{"   "}
            <span className="text-2xl text-red-500 absolute right-0">®</span>
          </span>

          <span className="text-4xl md:text-5xl lg:text-7xl text-gray-800">
            Empresa dedicada a entregar um serviço de qualidade com uma história
            de credibilidade
          </span>
        </div>
      </div>
      <Hero />
      <Card />
    </>
  );
};

export default Home;
