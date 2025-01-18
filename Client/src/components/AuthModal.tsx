import React, { useState } from 'react';
import { Stethoscope, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal container */}
      <div className="w-[800px] bg-navy-900 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden relative z-10 animate-[fadeIn_0.3s_ease-out]">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Left side - Image/Brand section */}
          <div className="bg-[#1a2942] p-8 flex flex-col justify-center items-center md:w-1/2">
            <div className="bg-blue-500/10 p-6 rounded-full mb-4">
              <Stethoscope className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">medify.me</h1>
            <p className="text-blue-200 text-center">
              Your trusted healthcare companion. Connect with doctors and manage your health journey seamlessly.
            </p>
          </div>

          {/* Right side - Content section */}
          <div className="bg-[#0f172a] p-8 flex flex-col justify-center md:w-1/2">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white text-center mb-8">
                Sign In
              </h2>

              {/* Sign In Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-[#1a2942] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="w-full px-3 py-2 bg-[#1a2942] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Sign In
                </button>
              </form>

              {/* Links */}
              <div className="flex flex-col items-center space-y-2 pt-4">
                <a href="/signup" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  Sign up for an account
                </a>
                <a href="/doctor-signup" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  Are you a doctor?
                </a>
              </div>

              <p className="text-sm text-gray-400 text-center mt-6">
                By signing in, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
