import { useNavigate, useSearchParams } from "react-router";
import { Star, Clock, MessageCircle, DollarSign, Award, Globe } from "lucide-react";
import { tutors } from "../data/tutors";

export default function Comparison() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const ids = searchParams.get("ids")?.split(",") || [];

  const selectedTutors = tutors.filter((t) => ids.includes(t.id));

  if (selectedTutors.length < 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Select at least 2 tutors to compare
          </h2>
          <button
            onClick={() => navigate("/tutors")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Tutors
          </button>
        </div>
      </div>
    );
  }

  const getBestValue = (field: keyof typeof selectedTutors[0], type: "higher" | "lower") => {
    if (type === "higher") {
      const max = Math.max(...selectedTutors.map((t) => t[field] as number));
      return (value: number) => value === max;
    } else {
      const min = Math.min(...selectedTutors.map((t) => t[field] as number));
      return (value: number) => value === min;
    }
  };

  const isHighestRating = getBestValue("rating", "higher");
  const isLowestPrice = getBestValue("price", "lower");
  const isMostExperience = getBestValue("experience", "higher");
  const isMostReviews = getBestValue("reviewCount", "higher");

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
              Back to Search
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Tutors</h1>
          <p className="text-gray-600">
            Side-by-side comparison to help you make the best choice
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 bg-gray-50 font-semibold text-gray-700 sticky left-0">
                    Feature
                  </th>
                  {selectedTutors.map((tutor) => (
                    <th key={tutor.id} className="p-4 bg-gray-50">
                      <div className="text-center">
                        <img
                          src={tutor.photo}
                          alt={tutor.name}
                          className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                        />
                        <div className="font-semibold text-gray-900">{tutor.name}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700 sticky left-0 bg-white">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      Price per hour
                    </div>
                  </td>
                  {selectedTutors.map((tutor) => (
                    <td
                      key={tutor.id}
                      className={`p-4 text-center ${
                        isLowestPrice(tutor.price) ? "bg-green-50" : ""
                      }`}
                    >
                      <div className="font-semibold text-gray-900">${tutor.price}</div>
                      {isLowestPrice(tutor.price) && (
                        <div className="text-xs text-green-700 font-medium mt-1">
                          Best Value
                        </div>
                      )}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700 sticky left-0 bg-white">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-gray-500" />
                      Rating
                    </div>
                  </td>
                  {selectedTutors.map((tutor) => (
                    <td
                      key={tutor.id}
                      className={`p-4 text-center ${
                        isHighestRating(tutor.rating) ? "bg-green-50" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900">{tutor.rating}</span>
                      </div>
                      {isHighestRating(tutor.rating) && (
                        <div className="text-xs text-green-700 font-medium mt-1">
                          Highest Rated
                        </div>
                      )}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700 sticky left-0 bg-white">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      Experience
                    </div>
                  </td>
                  {selectedTutors.map((tutor) => (
                    <td
                      key={tutor.id}
                      className={`p-4 text-center ${
                        isMostExperience(tutor.experience) ? "bg-green-50" : ""
                      }`}
                    >
                      <div className="font-semibold text-gray-900">
                        {tutor.experience} years
                      </div>
                      {isMostExperience(tutor.experience) && (
                        <div className="text-xs text-green-700 font-medium mt-1">
                          Most Experienced
                        </div>
                      )}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700 sticky left-0 bg-white">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-gray-500" />
                      Reviews
                    </div>
                  </td>
                  {selectedTutors.map((tutor) => (
                    <td
                      key={tutor.id}
                      className={`p-4 text-center ${
                        isMostReviews(tutor.reviewCount) ? "bg-green-50" : ""
                      }`}
                    >
                      <div className="font-semibold text-gray-900">
                        {tutor.reviewCount}
                      </div>
                      {isMostReviews(tutor.reviewCount) && (
                        <div className="text-xs text-green-700 font-medium mt-1">
                          Most Popular
                        </div>
                      )}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700 sticky left-0 bg-white">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-gray-500" />
                      Specialization
                    </div>
                  </td>
                  {selectedTutors.map((tutor) => (
                    <td key={tutor.id} className="p-4 text-center">
                      <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tutor.specialization}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700 sticky left-0 bg-white">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500" />
                      Languages
                    </div>
                  </td>
                  {selectedTutors.map((tutor) => (
                    <td key={tutor.id} className="p-4 text-center">
                      <div className="text-sm text-gray-700">
                        {tutor.language.join(", ")}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700 sticky left-0 bg-white">
                    Subjects
                  </td>
                  {selectedTutors.map((tutor) => (
                    <td key={tutor.id} className="p-4 text-center">
                      <div className="text-sm text-gray-700">
                        {tutor.subjects.join(", ")}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="bg-gray-50">
                  <td className="p-4 sticky left-0 bg-gray-50"></td>
                  {selectedTutors.map((tutor) => (
                    <td key={tutor.id} className="p-4">
                      <button
                        onClick={() => navigate(`/booking/${tutor.id}`)}
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                      >
                        Select This Tutor
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/tutors")}
            className="text-gray-600 hover:text-gray-800 underline"
          >
            Back to all tutors
          </button>
        </div>
      </div>
    </div>
  );
}
