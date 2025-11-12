import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCredentials } from "../store/authSlice";
import { removeToken } from "../utils/token";
import toast from "react-hot-toast";
import favicon from "../assets/favicon.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const auth = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nav = [
    { to: "/", label: "Home" },
    { to: "/subjects", label: "Subjects" },
    { to: "/mentors", label: "Mentors" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    // { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200/70">
      <div className="container-wide h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={favicon}
            alt="logo"
            className="h-auto w-9 rounded-lg object-cover"
          />
          <span className="text-base font-extrabold tracking-tight text-slate-900">
            Scholary Star
            <span className="ml-1 hidden sm:inline text-emerald-700">
              Science Academy
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({ isActive }) =>
                `text-sm font-semibold hover:text-emerald-700 ${
                  isActive ? "text-emerald-700" : "text-slate-800"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
          {/* <div className="hidden lg:flex items-center gap-3">
            {auth && auth.token ? (
              <>
                <span className="text-sm text-slate-700">
                  Hi, {auth.user?.name || "Student"}
                </span>
                <button
                  onClick={() => {
                    dispatch(clearCredentials());
                    removeToken();
                    toast.success("Logged out successfully");
                    navigate("/");
                  }}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-md shadow-emerald-500/30"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-md shadow-emerald-500/30"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div> */}
        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 border rounded-md"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm.75 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-base py-3 space-y-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 font-semibold ${
                    isActive ? "text-emerald-700" : "text-slate-800"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
              {auth && auth.token ? (
                <button
                  onClick={() => {
                    dispatch(clearCredentials());
                    removeToken();
                    toast.success("Logged out");
                    setOpen(false);
                    navigate("/");
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 border-2 border-slate-300 rounded-lg hover:border-emerald-600 hover:text-emerald-700 transition-all"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 border-2 border-slate-300 rounded-lg hover:border-emerald-600 hover:text-emerald-700 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-md shadow-emerald-500/30"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
