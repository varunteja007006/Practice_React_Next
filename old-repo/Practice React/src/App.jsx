import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { UseThemeContext } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, Menu, Unsplash, Cms, Tabs, Problems, MaterialUI } from "./pages";

function App() {
  const { theme } = UseThemeContext();

  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <main className={`${theme}`}>
        <Nav />
        <div className={`p-5 dark:bg-gray-700 z-0`}>
          <Routes>
            {/* react concepts like hooks */}
            <Route path="/" index element={<Home></Home>}></Route>

            {/* Unsplash - React Query tutorial*/}
            <Route
              path="/unsplash-project"
              index
              element={<Unsplash></Unsplash>}
            ></Route>

            {/* CMS project - To learn about Content Management System */}
            <Route path="/cms-project" element={<Cms></Cms>}></Route>

            {/* Menu project - To learn about filtering through items*/}
            <Route path="/menu-project" element={<Menu></Menu>}></Route>

            {/* Tabs project - To learn about the active tab system in webpages */}
            <Route path="/tabs-project" element={<Tabs></Tabs>}></Route>

            {/* Interview problems on React & JavaScript*/}
            <Route path="/problems" element={<Problems></Problems>}></Route>

            <Route
              path="/materialUI"
              element={<MaterialUI></MaterialUI>}
            ></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
