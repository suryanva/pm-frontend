import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../appStore.ts";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
function App() {
  return (
    <Provider store={appStore}>
      <>
        <div className="flex min-h-screen    bg-gray-50 text-gray-900">
          <div>
            <Sidebar />
          </div>
          <div className="flex flex-col  w-full bg-gray-50 dark:bg-dark-bg ">
            <Header />
            <Outlet />
          </div>
        </div>
      </>
    </Provider>
  );
}

export default App;
