import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../appStore.ts";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const isDark = useSelector((state: RootState) => state.global.isDarkModeOn);
  const isSideBarOpen = useSelector(
    (state: RootState) => state.global.isSideBarOpen
  );

  return (
    <>
      <div
        className={`flex min-h-screen ${
          isDark ? "dark" : ""
        } bg-gray-50 text-gray-900`}
      >
        <div>
          <Sidebar />
        </div>
        <div
          className={`flex flex-col w-full bg-gray-50 dark:bg-dark-bg ${
            isSideBarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
