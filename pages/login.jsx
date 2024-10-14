import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Enter a valid email';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      // Simulating login process
      setTimeout(() => {
        console.log('Logging in...');
        setLoading(false);
        router.push('/home'); // Redirect on successful login
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#D2E0FB] animate-fade-in">
      {/* Close Button */}
      <div className="absolute top-4 right-4">
        <button onClick={() => router.push('/home')}>
          <span className="text-2xl font-bold">×</span>
        </button>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 bg-white shadow-md rounded-md transition-transform transform hover:scale-105"
      >
        <h2 className="text-center text-2xl font-semibold mb-4">Sign In</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your password"
          />
          <span
            className="absolute right-3 mt-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Image
              src={showPassword ? '/eye-open-icon.svg' : '/eye-closed-icon.svg'}
              alt="Toggle Password Visibility"
              width={20}
              height={20}
            />
          </span>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
          {/* Forgot Password Link */}
          <div className="text-right">
            <a 
              onClick={() => router.push('/forgotPassword')} 
              className="text-blue-500 text-sm hover:underline mt-2 cursor-pointer"
            >
              Forgot password?
            </a>
          </div>
        </div>

        {/* OR Separator */}
        <div className="flex items-center mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Continue with Google Button */}
        <div className="mb-4">
          <button
            type="button"
            className="w-full p-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 flex justify-center items-center transition-all"
          >
            <Image
              src="/google-icon.svg" // Add Google Icon
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Google
          </button>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200 flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              Loading...
            </>
          ) : (
            'Sign In'
          )}
        </button>

        {/* Register Text */}
        <div className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <a
            onClick={() => router.push('/signUp')}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Register now
          </a>
        </div>
      </form>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
