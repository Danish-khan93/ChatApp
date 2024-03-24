import ReactDOM from "react-dom/client";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, PageNotFound, Signup } from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// create routing
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StyledEngineProvider>
);
