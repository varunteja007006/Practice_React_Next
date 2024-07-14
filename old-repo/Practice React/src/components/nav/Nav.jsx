import { navlinks } from "./navlinks/navlinks";
import { UseThemeContext } from "../../context/ThemeContext";
import { navMenuLinks } from "./navlinks/navMenuLinks";

function Nav() {
  const { theme, setTheme } = UseThemeContext();
  const handleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar border-b-2 shadow-md dark:bg-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.path}>{item.pathName}</a>
                </li>
              );
            })}
            <li>
              <a>Parent</a>
              <ul className="p-2">
                {navMenuLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.path}>{item.pathName}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl">React 💙</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks.map((item, index) => {
            return (
              <li key={index} className="hover:bg-slate-300">
                <a href={item.path}>{item.pathName}</a>
              </li>
            );
          })}
          <li tabIndex={0} className="hover:bg-slate-300 z-50">
            <details>
              <summary className="">More Project</summary>
              <ul className="p-2 dark:bg-gray-300">
                {navMenuLinks.map((item, index) => {
                  return (
                    <li key={index} className="hover:bg-slate-300 rounded-lg">
                      <a href={item.path}>{item.pathName}</a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* theme button */}
        <button
          onClick={handleTheme}
          className={`btn-sm btn text-black hover:bg-yellow-400 bg-yellow-300 dark:hover:bg-gray-700 dark:bg-black dark:text-white`}
        >
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Nav;
