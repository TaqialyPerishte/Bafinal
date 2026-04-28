import { useNavigate } from "react-router";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            <Home className="w-5 h-5" />
            Go Home
          </button>
          <button
            onClick={() => navigate("/tutors")}
            className="flex items-center gap-2 bg-white text-indigo-600 border-2 border-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold"
          >
            <Search className="w-5 h-5" />
            Find Tutors
          </button>
        </div>
      </div>
    </div>
  );
}
