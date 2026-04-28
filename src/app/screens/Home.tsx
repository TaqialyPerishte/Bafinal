import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Star, DollarSign, BookOpen, Clock } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const quickFilters = [
    { label: "Math", icon: "📐" },
    { label: "Programming", icon: "💻" },
    { label: "Languages", icon: "🌍" },
    { label: "Music", icon: "🎵" },
    { label: "Science", icon: "🔬" },
    { label: "IELTS", icon: "📝" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/tutors?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/tutors");
    }
  };

  const handleQuickFilter = (subject: string) => {
    navigate(`/tutors?subject=${encodeURIComponent(subject)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-600">TutorMatch</h1>
            <button
              onClick={() => navigate("/favorites")}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Favorites
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Tutor
          </h2>
          <p className="text-xl text-gray-600">
            Turn confusion into confident decisions
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="What do you want to learn?"
              className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-lg shadow-lg"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-lg text-gray-700 mb-6">Popular Subjects</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {quickFilters.map((filter) => (
              <button
                key={filter.label}
                onClick={() => handleQuickFilter(filter.label)}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center gap-2 text-gray-800 hover:bg-indigo-50"
              >
                <span className="text-2xl">{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/tutors")}
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Find Tutors
          </button>
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Top Rated</h4>
            <p className="text-gray-600 text-sm">Only verified expert tutors</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Best Value</h4>
            <p className="text-gray-600 text-sm">Affordable pricing for all</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">All Subjects</h4>
            <p className="text-gray-600 text-sm">From Math to Music</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Flexible</h4>
            <p className="text-gray-600 text-sm">Learn at your pace</p>
          </div>
        </div>
      </main>
    </div>
  );
}
