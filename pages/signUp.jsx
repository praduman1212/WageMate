import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); 
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
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

    if (!fullName) validationErrors.fullName = 'Full name is required';
    if (!mobileNumber) validationErrors.mobileNumber = 'Mobile number is required';
    if (!address) validationErrors.address = 'Address is required';
    if (!pincode) validationErrors.pincode = 'Pincode is required';
    if (!city) validationErrors.city = 'City is required';
    if (!state) validationErrors.state = 'State is required';
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Enter a valid email';
    }
    if (!password) validationErrors.password = 'Password is required';
    if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';
    if (!age) validationErrors.age = 'Age is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      // Simulate sign-up process
      setTimeout(() => {
        console.log('Signing up...');
        setLoading(false);
        router.push('/login'); // Redirect on successful signup
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#D2E0FB] animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white shadow-md rounded-md transition-transform transform hover:scale-105"
      >
        <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>

        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full p-2 border ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        {/* Mobile Number Input */}
        <div className="mb-4 flex items-center">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            {/* Add more country codes as needed */}
          </select>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className={`w-full p-2 border ${
              errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Mobile Number"
          />
          {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
        </div>

        {/* Address Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full p-2 border ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your address"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        {/* Pincode Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Pincode</label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className={`w-full p-2 border ${
              errors.pincode ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your pincode"
          />
          {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
        </div>

        {/* City Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`w-full p-2 border ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>

        {/* State Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={`w-full p-2 border ${
              errors.state ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your state"
          />
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
        </div>

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
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-2 border ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`w-full p-2 border ${
              errors.age ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:border-blue-500 transition-all`}
            placeholder="Enter your age"
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-4 text-gray-700">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500 underline">
          Log in
        </a>
      </p>
    </div>
  );
}
