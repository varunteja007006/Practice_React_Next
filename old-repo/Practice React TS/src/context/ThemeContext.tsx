import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Ttheme = "light" | "dark";

type themeContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<Ttheme>>;
};

const ThemeContext = createContext<themeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Ttheme>("light");

  useEffect(() => {
    const data = localStorage.getItem("theme");
    if (data) {
      const themeData: Ttheme = JSON.parse(data);
      setTheme(themeData);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error("Context must be used inside an Context Provider !!");
  }
  return context;
};
