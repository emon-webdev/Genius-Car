import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Checkout from "../Pages/Checkout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Orders from "../Pages/Orders";
import Services from "../Pages/Services";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:'/checkout/:id',
        loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`),
        element: <PrivateRoute><Checkout/></PrivateRoute>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders/></PrivateRoute>
      }
    ],
  },
]);

export default router;
