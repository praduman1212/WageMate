export default function Hello() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Hello</h1>
        <p className="text-lg text-gray-700">
          Welcome to WageMate, your go-to platform for finding daily wage work nearby.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
}
