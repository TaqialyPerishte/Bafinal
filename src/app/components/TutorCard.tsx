import { Star, Clock } from "lucide-react";
import { Tutor } from "../data/tutors";
import { useNavigate } from "react-router";

interface TutorCardProps {
  tutor: Tutor;
  onCompare: (tutorId: string) => void;
  isSelected: boolean;
  showCompareButton?: boolean;
  recommended?: boolean;
}

export default function TutorCard({
  tutor,
  onCompare,
  isSelected,
  showCompareButton = true,
  recommended = false
}: TutorCardProps) {
  const navigate = useNavigate();

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 relative ${
      isSelected ? "ring-2 ring-indigo-600" : ""
    }`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
          ⭐ Recommended
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <img
          src={tutor.photo}
          alt={tutor.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{tutor.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-gray-900">{tutor.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">({tutor.reviewCount} reviews)</span>
          </div>
          <p className="text-indigo-600 font-semibold mt-1">${tutor.price}/hour</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <Clock className="w-4 h-4" />
          <span>{tutor.experience} years experience</span>
        </div>
        <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
          {tutor.specialization}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tutor.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tutor.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {showCompareButton && (
          <button
            onClick={() => onCompare(tutor.id)}
            className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
              isSelected
                ? "border-indigo-600 bg-indigo-600 text-white"
                : "border-gray-300 text-gray-700 hover:border-indigo-600"
            }`}
          >
            {isSelected ? "Selected" : "Compare"}
          </button>
        )}
        <button
          onClick={() => navigate(`/tutor/${tutor.id}`)}
          className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
