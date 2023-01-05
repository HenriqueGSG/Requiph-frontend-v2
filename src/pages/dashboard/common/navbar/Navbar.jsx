import { useContext } from "react";
import AuthContext from "../../../../setup/auth/context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="bg-gray-500 text-white  text-center flex justify-center items-center relative py-2">
      <span className="font-semibold text-lg">{user && user.username}</span>
      <button
        onClick={logoutUser}
        className=" bg-white px-4 py-0.5 text-red-700 absolute right-5 rounded-full font-semibold "
      >
        Sair
      </button>
    </div>
  );
};

export default Navbar;
