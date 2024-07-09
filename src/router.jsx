import React from "react";
import {
  createBrowserRouter,
  RouterProvider as BaseRouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Dashboard from "./pages/Dashboard";
import { selectUser, selectisAuthenticated } from "./redux/user/selector";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectisAuthenticated);
  return <>{isAuthenticated ? <>{children}</> : <Navigate to={`/login`} />}</>;
};

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectisAuthenticated);
  return (
    <>{!isAuthenticated ? <>{children}</> : <Navigate to={`/Dashboard`} />}</>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
    </>
  )
);

const RouterProvider = () => <BaseRouterProvider router={router} />;

export default RouterProvider;
