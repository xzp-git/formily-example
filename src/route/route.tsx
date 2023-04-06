import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import LoginMarkupSchema from "../pages/login/markup-schema";
import LoginJsonSchema from "../pages/login/json-schema";
import LoginJsx from "../pages/login/jsx";
import RegisterMarkupSchema from "../pages/register/m";
import RegisterJsonSchema from "../pages/register/json";
import RegisterJsx from "../pages/register/jsx";
import PasswordMarkupSchema from "../pages/password/m";
import PasswordJsonSchema from "../pages/password/json";
import PasswordJsx from "../pages/password/jsx";
import EditMarkupSchema from "../pages/edit/m";
import EditJsonSchema from "../pages/edit/json";
import EditJsx from "../pages/edit/jsx";
import Obs from "../pages/reactive/observable";
import Observer from "../pages/reactive/observer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login/markupSchema",
        element: <LoginMarkupSchema />,
      },
      {
        path: "/login/jsonSchema",
        element: <LoginJsonSchema />,
      },
      {
        path: "/login/jsx",
        element: <LoginJsx />,
      },
      {
        path: "/register/markupSchema",
        element: <RegisterMarkupSchema />,
      },
      {
        path: "/register/jsonSchema",
        element: <RegisterJsonSchema />,
      },
      {
        path: "/register/jsx",
        element: <RegisterJsx />,
      },
      {
        path: "/password/markupSchema",
        element: <PasswordMarkupSchema />,
      },
      {
        path: "/password/jsonSchema",
        element: <PasswordJsonSchema />,
      },
      {
        path: "/password/jsx",
        element: <PasswordJsx />,
      },
      {
        path: "/edit/markupSchema",
        element: <EditMarkupSchema />,
      },
      {
        path: "/edit/jsonSchema",
        element: <EditJsonSchema />,
      },
      {
        path: "/edit/jsx",
        element: <EditJsx />,
      },
      {
        path: "/reactive/observable",
        element: <Obs />,
      },
      {
        path: "/reactive/observer",
        element: <Observer />,
      },
    ],
  },
]);
