import { useContext } from "react";
import AuthContext from "../../setup/auth/context/AuthContext";

const Login = () => {
  const { loginUser, user } = useContext(AuthContext);
  console.log(user && user.username);
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/pjh5N4b/Group-5.png"
            alt="Group-5"
            border="0"
            className="my-5 "
          />
        </div>
        {/* <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div> */}

        <form onSubmit={loginUser}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Usuário
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
