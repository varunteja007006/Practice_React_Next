import { useState, createContext, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const themeData = localStorage.getItem("theme");
    if (themeData) {
      setTheme(themeData);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UseThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw Error("Context must be used inside an Context Provider !!");
  }
  return themeContext;
};
