import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Axios from "axios";

import { useQueryClient } from "@tanstack/react-query";

Axios.defaults.xsrfCookieName = "csrftoken";
Axios.defaults.xsrfHeaderName = "X-CSRFToken";
const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};
const getCsrfToken = () => {
  const csrf = document.cookie.match("(^|;)\\s*csrftoken\\s*=\\s*([^;]+)");
  return csrf ? csrf.pop() : "";
};

const PdfForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("-- Selecione um cargo --");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const fetchVagas = async () => {
    const res = await Axios.get("http://localhost:8000/api/vaga/list/");
    return res.data;
  };
  const { data, isLoading } = useQuery(["jobListSite"], () => fetchVagas());

  if (isLoading === true) {
    return <h1>Loading</h1>;
  }

  const upload = async (data) => {
    const res = await Axios.post(
      "http://localhost:8000/api/resume/upload/",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        method: "POST",
      }
    );
    return res.data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("open_job", role);
    formData.append("message", message);
    let csrftoken = getCsrfToken();

    upload(formData);
  };

  return (
    <div>
      <form
        className="text-gray-600 body-font relative"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Envie seu currículo
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Seu currículo será enviado para nosso time de RH.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="role"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Cargo
                  </label>
                  <select
                    id="role"
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    defaultValue={role}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value={role} disabled hidden>
                      -- Selecione um cargo --{" "}
                    </option>
                    {data.map((vaga) => (
                      <option key={vaga.id} value={parseInt(vaga.id)}>
                        {vaga.role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative text-center ">
                  <div className="flex flex-col justify-center items-center bg-red-500 mb-1 rounded  hover:bg-red-600 ">
                    <label
                      className="absolute text-white font-semibold "
                      htmlFor="file"
                    >
                      Escolher Arquivo
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="opacity-0 relative w-full cursor-pointer"
                      accept="application/pdf,application/vnd.ms-excel"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <span className="text-gray-400 ">{file && file.name}</span>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Enviar
                </button>
              </div>

              <div className="p-2 w-full pt-5 mt-5 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center w-full mb-5">
                  <img
                    src="https://i.ibb.co/pjh5N4b/Group-5.png"
                    alt="Group-5"
                    border="0"
                    className=""
                  />
                </div>
                <a className="text-red-500">contato@requiph.com</a>
                <p className="leading-normal my-5">Piracicaba/SP</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PdfForm;
