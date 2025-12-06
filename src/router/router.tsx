import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/sites/Home";
import Layout from "../layout/Layout";
import AdminLayout from "../layout/AdminLayout";
import AuthLayout from "../layout/AuthLayout";
import SignUp from "../pages/AuthPages/SignUp";
import VerifyOtp from "../pages/AuthPages/VerifyOtp";
import ForgetPassword from "../pages/AuthPages/ForgetPassword";
import SignIn from "../pages/AuthPages/SignIn";
import NewPasswordSet from "../pages/AuthPages/NewPasswordSet";

const router = createBrowserRouter([
        // Auth
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp/>,
      },
      {
        path: "new-password-set",
        element: <NewPasswordSet />,
      },
    ],
  },  
  {
    path: "/",
    element: <Layout />, // Public layout
    children: [
      { path: "/", element: <Home /> },

      // Add more public pages here
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />, // Admin layout
    children: [
      // /dashboard/add-admin
      // Add more admin pages here
    ],
  },
]);

export default router;
