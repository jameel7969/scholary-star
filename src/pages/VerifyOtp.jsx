import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import network from "../utils/networkManager";
import { AUTH } from "../utils/endpoints";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromState = location.state?.email || "";

  const [email, setEmail] = useState(emailFromState);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (otp.length < 4) {
      toast.error("Please enter a valid OTP code");
      return;
    }

    setLoading(true);

    try {
      const response = await network.post(AUTH.VERIFY, { email, otp });
      toast.success(
        response.message || "OTP verified successfully! Redirecting...",
        {
          duration: 2000,
          position: "top-center",
        }
      );

      setTimeout(() => {
        navigate("/reset-password", { state: { email, otp } });
      }, 1000);
    } catch (err) {
      toast.error(err.message || "OTP verification failed. Please try again.", {
        duration: 4000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await network.post(AUTH.FORGOT, { email });
      toast.success(response.message || "New OTP sent to your email!");
    } catch (err) {
      toast.error(err.message || "Failed to resend OTP. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-50">
        {/* Left Side - Verify OTP Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl border border-slate-100">
            {/* Logo/Brand */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent mb-2">
                Verify OTP
              </h2>
              <p className="text-slate-600">
                Enter the code we sent to your email
              </p>
            </div>

            {/* Email Display Box */}
            {emailFromState && (
              <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-teal-700 font-medium">
                    Code sent to:{" "}
                    <span className="font-semibold">{emailFromState}</span>
                  </p>
                </div>
              </div>
            )}

            {/* Verify OTP Form */}
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
                    disabled={true}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-slate-50 cursor-not-allowed opacity-75"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  One-Time Password
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
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                  </span>
                  <input
                    required
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit code"
                    maxLength="6"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Check your email for the verification code
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
                    Verifying...
                  </span>
                ) : (
                  "Verify OTP"
                )}
              </button>
            </form>

            {/* Resend OTP */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600 mb-2">
                Didn't receive the code?
              </p>
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-teal-600 hover:text-teal-700 font-semibold text-sm"
              >
                Resend OTP
              </button>
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
              Almost There!
            </h1>
            <p className="text-xl mb-8 text-teal-50">
              We've sent a verification code to your email. Enter it to confirm
              your identity and reset your password.
            </p>

            {/* Verification Tips */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Check Your Inbox
                  </h3>
                  <p className="text-teal-50">
                    Look for an email from us with your verification code
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Code Expires in 10 Minutes
                  </h3>
                  <p className="text-teal-50">
                    Enter the code quickly to ensure it's still valid
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Can Request New Code
                  </h3>
                  <p className="text-teal-50">
                    Didn't receive it? You can resend the code anytime
                  </p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Security Tip</h3>
                  <p className="text-teal-50 text-sm">
                    Never share your OTP code with anyone. Our team will never
                    ask for this code via phone or email.
                  </p>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-8 p-6 bg-teal-500/20 backdrop-blur-sm rounded-xl border border-teal-400/30">
              <h3 className="font-semibold text-lg mb-3">
                Can't find the email?
              </h3>
              <ul className="space-y-2 text-teal-50 text-sm">
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Check your spam or junk folder
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verify you entered the correct email
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Wait a few minutes for delivery
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Click "Resend OTP" to get a new code
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
