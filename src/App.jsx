import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Mentors from "./pages/Mentors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DashboardStudent from "./pages/DashboardStudent";
import DashboardMentor from "./pages/DashboardMentor";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";
import { useDispatch, useSelector } from 'react-redux'
import { clearCredentials } from './store/authSlice'
import { getToken, removeToken } from './utils/token'
import toast from 'react-hot-toast'

const App = () => {
  const dispatch = useDispatch()
  const tokenInStore = useSelector(state => state.auth?.token)

  useEffect(() => {
    // helper to parse JWT payload
    function parseJwt(token) {
      try {
        const payload = token.split('.')[1]
        const json = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))
        return json
      } catch (e) {
        return null
      }
    }

    const token = tokenInStore || getToken()
    if (!token) return

    const payload = parseJwt(token)
    if (!payload || !payload.exp) return

    const expMs = payload.exp * 1000
    const now = Date.now()
    const remaining = expMs - now
    if (remaining <= 0) {
      // already expired
      dispatch(clearCredentials())
      removeToken()
      toast.error('Session expired, please sign in again')
      return
    }

    const id = setTimeout(() => {
      dispatch(clearCredentials())
      removeToken()
      toast.error('Session expired, please sign in again')
    }, remaining)

    return () => clearTimeout(id)
  }, [dispatch, tokenInStore])
  return (
    <BrowserRouter>
    
      <Routes>
        {/* Auth routes use a centered card layout and don't render the main site Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/courses"
            element={<Navigate to="/subjects" replace />}
          />
          <Route path="/subjects" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard/student" element={<DashboardStudent />} />
          <Route path="/dashboard/mentor" element={<DashboardMentor />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
