import { useNavigate, useParams } from "react-router";
import { Star, Clock, Globe, Award, Calendar, Heart } from "lucide-react";
import { tutors } from "../data/tutors";
import { useState } from "react";

export default function TutorProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const tutor = tutors.find((t) => t.id === id);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!tutor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutor not found</h2>
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

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
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
              Back to Search
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-12">
            <div className="flex items-start gap-6">
              <img
                src={tutor.photo}
                alt={tutor.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <div className="flex-1 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{tutor.name}</h1>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                        <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                        <span className="font-semibold">{tutor.rating}</span>
                        <span className="text-sm">({tutor.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span>{tutor.experience} years</span>
                      </div>
                    </div>
                    <p className="text-3xl font-bold">${tutor.price}/hour</p>
                  </div>
                  <button
                    onClick={toggleFavorite}
                    className={`p-3 rounded-full transition-colors ${
                      isFavorited ? "bg-red-500" : "bg-white/20 hover:bg-white/30"
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${isFavorited ? "fill-white" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-6 border-b border-gray-200">
            <div className="flex gap-4">
              <button
                onClick={() => navigate(`/booking/${tutor.id}`)}
                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg"
              >
                Book Now
              </button>
              <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
                Message
              </button>
            </div>
          </div>

          <div className="px-8 py-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  Specialization
                </h3>
                <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium mb-4">
                  {tutor.specialization}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tutor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-600" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tutor.language.map((lang) => (
                    <span
                      key={lang}
                      className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {tutor.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About Me</h3>
              <p className="text-gray-700 leading-relaxed">{tutor.aboutMe}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Teaching Style
              </h3>
              <p className="text-gray-700 leading-relaxed">{tutor.teachingStyle}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                Availability
              </h3>
              <div className="grid md:grid-cols-3 gap-3">
                {tutor.availability.map((slot, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border border-green-200 px-4 py-3 rounded-lg text-green-800 font-medium text-center"
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Student Reviews
              </h3>
              <div className="space-y-4">
                {tutor.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-900">
                        {review.user}
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
