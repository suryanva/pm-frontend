import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import Error from "./components/Error";
import appStore from "../appStore";
import DashBoard from "./pages/DashBoard";
import Timeline from "./pages/Timeline";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/projects/:projectId",
        element: <Projects />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
