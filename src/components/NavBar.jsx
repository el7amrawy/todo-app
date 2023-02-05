import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ setTheme, theme }) => {
  return (
    <nav className="navbar bg-base-100 shadow">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-4xl">#todo</a>
      </div>
      <div className="navbar-end">
        <FontAwesomeIcon
          icon={faMoon}
          className={`text-3xl mr-10 hover:scale-125 transition-all cursor-pointer ${
            theme === "dark" ? "text-yellow-400" : ""
          }`}
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
