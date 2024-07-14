import { NavLink } from "react-router-dom";
import { GoSun, GoMoon } from "react-icons/go";
import { useThemeContext } from "../../../context/ThemeContext";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function Navbar() {
  const navlinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Social",
      url: "/social-links",
    },
  ];

  const navlinksMenu = [
    {
      name: "Image Slider",
      url: "projects/image-slider",
    },
    {
      name: "Tabs",
      url: "projects/tabs",
    },
    {
      name: "MultiPage Form",
      url: "projects/multipageform",
    },
    {
      name: "Zod+ReactHookForms",
      url: "projects/zodreacthookforms",
    },
    {
      name: "Framer Motion",
      url: "projects/framerMotion",
    },
    {
      name: "Material UI",
      url: "projects/materialUI",
    },
    {
      name: "Form Builder",
      url: "projects/form-builder",
    },
  ];

  // light = true, dark = false

  const { theme, setTheme } = useThemeContext();
  const handleTheme = () => {
    function setThemeInLocal(theme: "light" | "dark") {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
    setTheme(theme === "light" ? "dark" : "light");
    setThemeInLocal(theme === "light" ? "dark" : "light");
  };

  const [chevronDirection, setChevronDirection] = useState(false);
  const toggleChevronDirection = () => {
    setChevronDirection(!chevronDirection);
  };
  return (
    <div className="navbar min-w-[400px] bg-white dark:bg-gray-700  dark:text-white">
      <div className="navbar-start">
        {/* small screen */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-gray-300 p-2 text-black shadow dark:bg-gray-300 dark:text-black">
            {navlinks.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink to={item.url}>{item.name}</NavLink>
                </li>
              );
            })}

            <li>
              <a>Projects</a>
              <ul className="p-2">
                {navlinksMenu.map((item) => {
                  return (
                    <li key={item.name}>
                      <NavLink to={item.url}>{item.name}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
        {/* brand name */}
        <a className="text-2xl text-black dark:text-white">React TS 💙</a>
      </div>
      {/* large screen nav bar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks.map((item) => {
            return (
              <li className="me-2" key={item.name}>
                <NavLink
                  to={item.url}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "active"
                        : "bg-gray-300 text-black dark:bg-gray-300 dark:text-black"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Projects & theme buttons */}
      <div className="navbar-end">
        <div className="dropdown hidden lg:block">
          <div
            tabIndex={0}
            role="button"
            // onClick={toggleChevronDirection}
            className="btn m-1 bg-blue-100 text-black shadow-md hover:bg-blue-200 hover:shadow-lg dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400"
          >
            Explore Projects{" "}
            {!chevronDirection ? <FaChevronDown /> : <FaChevronUp />}
          </div>
          <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-blue-100 p-2 shadow dark:bg-gray-300">
            {navlinksMenu.map((item) => {
              return (
                <li
                  key={item.name}
                  className="rounded-lg text-black dark:hover:bg-gray-400"
                >
                  <NavLink to={item.url}>{item.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={handleTheme}
          className="mx-5 flex flex-row rounded-full border border-black bg-white text-lg font-bold text-black shadow-md"
        >
          <span
            className={
              theme === "light"
                ? "rounded-l-full border-r border-black bg-yellow-400 p-3 text-black shadow-xl"
                : "rounded-l-full rounded-tl-lg p-3 "
            }
          >
            <GoSun />
          </span>
          <span
            className={
              theme === "dark"
                ? "rounded-r-full bg-black p-3 text-yellow-400 shadow-lg"
                : "rounded-r-full p-3"
            }
          >
            <GoMoon />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
