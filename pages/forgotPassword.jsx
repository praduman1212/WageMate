import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else {
      setError('');
      setMessage(`A password reset link has been sent to ${email}`);
      // Add actual API call logic here
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D2E0FB] p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold mb-4 text-center animate__animated animate__fadeIn">
          Forgot Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address below to receive a verification code for resetting your password. 
          Please make sure to check your spam folder if you don’t see the email in your inbox.
        </p>

        {message && (
          <p className="text-green-600 text-center mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Remembered your password?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}
