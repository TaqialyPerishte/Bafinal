import { useNavigate, useSearchParams } from "react-router";
import { CheckCircle, Calendar, Clock, User, MessageCircle } from "lucide-react";
import { tutors } from "../data/tutors";

export default function Confirmation() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tutorId = searchParams.get("tutor");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const duration = searchParams.get("duration") || "1";

  const tutor = tutors.find((t) => t.id === tutorId);

  if (!tutor || !date || !time) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Booking information not found
          </h2>
          <button
            onClick={() => navigate("/tutors")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Find Tutors
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = tutor.price * parseFloat(duration);

  const addToCalendar = () => {
    alert("Calendar integration would be implemented here");
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
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Lesson Booked Successfully!
            </h1>
            <p className="text-gray-600">
              Your lesson has been confirmed. We've sent a confirmation email with all the details.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={tutor.photo}
                alt={tutor.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tutor.name}
                </h3>
                <p className="text-gray-600">{tutor.specialization}</p>
              </div>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 bg-white rounded-lg p-4">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="text-sm text-gray-600">Date</div>
                  <div className="font-semibold text-gray-900">
                    {new Date(date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-lg p-4">
                <Clock className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="text-sm text-gray-600">Time & Duration</div>
                  <div className="font-semibold text-gray-900">
                    {time} ({duration} hour{parseFloat(duration) > 1 ? 's' : ''})
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-lg p-4">
                <User className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="text-sm text-gray-600">Total Price</div>
                  <div className="font-semibold text-indigo-600 text-lg">
                    ${totalPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={addToCalendar}
              className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              <Calendar className="w-5 h-5" />
              Add to Calendar
            </button>
            <button
              onClick={() => navigate(`/tutor/${tutor.id}`)}
              className="flex items-center justify-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Message Tutor
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 mb-4">
              You can manage your bookings and view upcoming lessons from your dashboard
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/tutors")}
                className="text-indigo-600 hover:text-indigo-700 font-semibold underline"
              >
                Book Another Lesson
              </button>
              <button
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-gray-700 font-semibold underline"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-2">Important Information</h4>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>• You'll receive a reminder 24 hours before your lesson</li>
            <li>• Free cancellation up to 24 hours before the lesson</li>
            <li>• The tutor will send you the lesson link via email</li>
            <li>• Prepare any materials or questions in advance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
