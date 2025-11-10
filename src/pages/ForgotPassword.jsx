import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import network from "../utils/networkManager";
import { AUTH } from "../utils/endpoints";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await network.post(AUTH.FORGOT, { email });
      toast.success("OTP sent to your email successfully!", {
        duration: 2000,
        position: "top-center",
      });

      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 1000);
    } catch (err) {
      toast.error(err.message || "Failed to send OTP. Please try again.", {
        duration: 4000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-50">
        {/* Left Side - Forgot Password Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl border border-slate-100">
            {/* Logo/Brand */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent mb-2">
                Forgot Password?
              </h2>
              <p className="text-slate-600">
                Enter your email and we'll send you an OTP
              </p>
            </div>

            {/* Forgot Password Form */}
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  We'll send a one-time password to this email address
                </p>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-sky-600 text-white font-semibold py-3 rounded-lg hover:from-teal-600 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-500/30"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending OTP...
                  </span>
                ) : (
                  "Send OTP"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">
                    Remember your password?
                  </span>
                </div>
              </div>
            </div>

            {/* Back to Login Link */}
            <div className="text-center">
              <a
                href="/login"
                className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Sign In
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Information Panel */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-teal-600 to-sky-700 p-12 items-center justify-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>

          <div className="relative z-10 max-w-lg text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              We've Got You Covered
            </h1>
            <p className="text-xl mb-8 text-teal-50">
              Forgot your password? No worries! We'll help you get back to
              learning in just a few simple steps.
            </p>

            {/* Recovery Steps */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Enter Your Email
                  </h3>
                  <p className="text-teal-50">
                    Provide the email address associated with your account
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Receive OTP Code
                  </h3>
                  <p className="text-teal-50">
                    Check your inbox for a one-time password code
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Verify & Reset</h3>
                  <p className="text-teal-50">
                    Enter the OTP and create your new password
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Back to Learning
                  </h3>
                  <p className="text-teal-50">
                    Sign in with your new password and continue your journey
                  </p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-yellow-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Didn't receive the OTP?
                  </h3>
                  <p className="text-teal-50 text-sm">
                    Check your spam folder or request a new code after 60
                    seconds. Make sure the email address is correct.
                  </p>
                </div>
              </div>
            </div>

            {/* Help Text */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-teal-50 text-sm">
                <span className="font-semibold">Still having trouble?</span>{" "}
                Contact our support team at{" "}
                <a
                  href="mailto:support@tutorplatform.com"
                  className="text-white underline hover:text-teal-100"
                >
                  support@tutorplatform.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
