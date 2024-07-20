import * as React from "react";

type UnsplashGlobalContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const UnsplashGlobalContext = React.createContext<UnsplashGlobalContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
});

export const UnsplashGlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchTerm, setSearchTerm] = React.useState("cat");

  const obj = React.useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
    }),
    [searchTerm]
  );

  return (
    <UnsplashGlobalContext.Provider value={obj}>
      {children}
    </UnsplashGlobalContext.Provider>
  );
};

export const UseUnsplashGlobalContext = () => {
  const unsplashGlobalContext = React.useContext(UnsplashGlobalContext);
  if (!unsplashGlobalContext) {
    throw Error("Context must be used inside an Context Provider !!");
  }
  return unsplashGlobalContext;
};
