import { useNavigate } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

export default function NavBar() {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "{}");

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
      {/* Left: Logo */}
      <div
        className="text-xl font-bold cursor-pointer select-none"
        onClick={() => navigate("/")}
      >
        MessageX
      </div>

      {/* Right: Buttons */}
      {loggedUser.name ? (
        <div className="flex gap-5 items-center">
          <p
            className="cursor-pointer flex items-center gap-1"
            onClick={() => navigate("/search")}
          >
            <FaSearch />
          </p>
          <p
            className="cursor-pointer flex items-center gap-1"
            onClick={() => navigate("/dashboard")}
          >
            <FaUser />
          </p>
        </div>
      ) : (
        <div className="space-x-4">
          <button
            onClick={handleLoginClick}
            className="px-4 py-2 rounded bg-transparent border border-white hover:bg-white hover:text-gray-800 transition"
          >
            Login
          </button>
          <button
            onClick={handleRegisterClick}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
