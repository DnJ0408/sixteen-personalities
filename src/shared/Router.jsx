import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Signup from "../pages/Signup"
import Test from "../pages/Test"
import TestResults from "../pages/TestResults"
import Layout from "../components/Layout"
import useAuthStore from "../zustand/authStore"

const Router = () => {

  const { user } = useAuthStore((state) => state);

  const GuestRoute = () => {
    return user ? <Navigate to="/" /> : <Outlet />;
  }

  const PrivateRoute = () => {
    return user ? <Outlet /> : <Navigate to="/" />
  }

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
          <Route path="/testresults" element={<TestResults />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Router