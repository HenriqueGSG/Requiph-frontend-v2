import React from "react";

const EditVagaForm = ({ data }) => {
  const editVaga = async (role, sector, company, description, requirements) => {
    const response = await Axios.patch(
      "http://localhost:8000/api/dashboard/vaga/create/",
      {
        role: role,
        sector: sector,
        company: company,
        description: description,
        requirements: requirements,
      }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { role, sector, company, requirements, description } = e.target;
    console.log(role.value);
    postVaga(
      role.value,
      sector.value,
      company.value,
      requirements.value,
      description.value
    );
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  console.log(data);
  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white w-full">
        <h1 className="text-center text-2xl font-semibold pb-2 border-b-2 border-gray-400 mb-5">
          Criar vaga
        </h1>
        <form
          method="PATCH"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="form-group mb-6">
            <label
              htmlFor="role"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Função
            </label>
            <input
              type="text"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="role"
              aria-describedby="roleHelp"
              placeholder="Digite a função"
            />
            <small id="roleHelp" className="block mt-1 text-xs text-gray-600">
              É o cargo da vaga.
            </small>
          </div>
          <div className="flex gap-2">
            <div className="form-group mb-6 w-1/2">
              <label
                htmlFor="sector"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Setor
              </label>
              <select
                required
                type="text"
                defaultValue={"DEFAULT"}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="sector"
                placeholder="Setor"
              >
                {" "}
                <option value="DEFAULT" disabled hidden>
                  -- Selecione um setor --
                </option>
                {data.sector.map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    {sec.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-6 w-1/2">
              <label
                htmlFor="company"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Empresa
              </label>
              <select
                required
                type="text"
                defaultValue={"DEFAULT"}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="company"
                placeholder="Empresa"
              >
                {" "}
                <option value="DEFAULT" disabled hidden>
                  -- Selecione uma repuiph --
                </option>
                {data.company.map((comp) => (
                  <option key={comp.id} value={comp.id}>
                    {comp.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="description"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Descrição
            </label>
            <textarea
              type="text"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="description"
              placeholder="Descrição vaga"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="requirements"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Requisitos
            </label>
            <input
              type="text"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="requirements"
              aria-describedby="requirementsHelp"
              placeholder="Digite os requisitos"
            />
            <small
              id="requirementsHelp"
              className="block mt-1 text-xs text-gray-600"
            >
              Lista de requisitos para vaga.
            </small>
          </div>
          <div className=" flex gap-2 justify-center">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="
      px-6
      py-2.5
      bg-gray-400
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Criar Vaga
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditVagaForm;
