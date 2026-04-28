import { useState } from "react";
import { useNavigate } from "react-router";
import { Heart } from "lucide-react";
import { tutors } from "../data/tutors";
import TutorCard from "../components/TutorCard";

export default function Favorites() {
  const navigate = useNavigate();
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);

  const favoriteTutors = tutors.slice(0, 3);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-indigo-600"
            >
              TutorMatch
            </button>
            <button
              onClick={() => navigate("/tutors")}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Find Tutors
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
        </div>

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

        {favoriteTutors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteTutors.map((tutor) => (
              <TutorCard
                key={tutor.id}
                tutor={tutor}
                onCompare={handleCompareToggle}
                isSelected={selectedForComparison.includes(tutor.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No favorites yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start adding tutors to your favorites to keep track of them
            </p>
            <button
              onClick={() => navigate("/tutors")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Browse Tutors
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
