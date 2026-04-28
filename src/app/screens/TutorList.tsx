import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Filter, X } from "lucide-react";
import { tutors, Tutor } from "../data/tutors";
import TutorCard from "../components/TutorCard";

export default function TutorList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);

  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    subject: searchParams.get("subject") || "",
    minPrice: 0,
    maxPrice: 100,
    minRating: 0,
    minExperience: 0,
    language: "",
  });

  const subjects = Array.from(new Set(tutors.flatMap((t) => t.subjects)));
  const languages = Array.from(new Set(tutors.flatMap((t) => t.language)));

  const filteredTutors = tutors.filter((tutor) => {
    if (filters.search && !tutor.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !tutor.subjects.some(s => s.toLowerCase().includes(filters.search.toLowerCase())) &&
        !tutor.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.subject && !tutor.subjects.includes(filters.subject)) {
      return false;
    }
    if (tutor.price < filters.minPrice || tutor.price > filters.maxPrice) {
      return false;
    }
    if (tutor.rating < filters.minRating) {
      return false;
    }
    if (tutor.experience < filters.minExperience) {
      return false;
    }
    if (filters.language && !tutor.language.includes(filters.language)) {
      return false;
    }
    return true;
  });

  const sortedTutors = [...filteredTutors].sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  });

  const topTutors = sortedTutors.slice(0, 3);

  const handleCompareToggle = (tutorId: string) => {
    setSelectedForComparison((prev) =>
      prev.includes(tutorId)
        ? prev.filter((id) => id !== tutorId)
        : prev.length < 3
        ? [...prev, tutorId]
        : prev
    );
  };

  const handleCompare = () => {
    if (selectedForComparison.length >= 2) {
      navigate(`/compare?ids=${selectedForComparison.join(",")}`);
    }
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      subject: "",
      minPrice: 0,
      maxPrice: 100,
      minRating: 0,
      minExperience: 0,
      language: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-indigo-600"
            >
              TutorMatch
            </button>
            <button
              onClick={() => navigate("/favorites")}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Favorites
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Find Your Tutor</h1>
            <p className="text-gray-600 mt-1">
              {filteredTutors.length} tutors found
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  value={filters.subject}
                  onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">All Subjects</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={filters.language}
                  onChange={(e) => setFilters({ ...filters, language: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">All Languages</option>
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Rating
                </label>
                <select
                  value={filters.minRating}
                  onChange={(e) =>
                    setFilters({ ...filters, minRating: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="0">Any Rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.8">4.8+ Stars</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range: ${filters.minPrice} - ${filters.maxPrice}
                </label>
                <div className="flex gap-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.minPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, minPrice: Number(e.target.value) })
                    }
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, maxPrice: Number(e.target.value) })
                    }
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Experience (years)
                </label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={filters.minExperience}
                  onChange={(e) =>
                    setFilters({ ...filters, minExperience: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={resetFilters}
                className="text-gray-600 hover:text-gray-800 underline"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {selectedForComparison.length > 0 && (
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-indigo-900">
                {selectedForComparison.length} tutor(s) selected for comparison
              </p>
              <p className="text-sm text-indigo-700">
                Select 2-3 tutors to compare
              </p>
            </div>
            {selectedForComparison.length >= 2 && (
              <button
                onClick={handleCompare}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Compare Now
              </button>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTutors.map((tutor) => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
              onCompare={handleCompareToggle}
              isSelected={selectedForComparison.includes(tutor.id)}
              recommended={topTutors.includes(tutor)}
            />
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No tutors found matching your filters
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 text-indigo-600 hover:text-indigo-700 underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
