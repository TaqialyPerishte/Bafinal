import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Calendar, Clock, DollarSign, User } from "lucide-react";
import { tutors } from "../data/tutors";

export default function Booking() {
  const navigate = useNavigate();
  const { id } = useParams();
  const tutor = tutors.find((t) => t.id === id);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState(1);
  const [notes, setNotes] = useState("");

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

  const totalPrice = tutor.price * duration;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      navigate(`/confirmation?tutor=${tutor.id}&date=${selectedDate}&time=${selectedTime}&duration=${duration}`);
    }
  };

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ];

  const today = new Date().toISOString().split('T')[0];

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
              onClick={() => navigate(`/tutor/${tutor.id}`)}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Back to Profile
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Lesson</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleBooking} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  Selected Tutor
                </h3>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{tutor.name}</div>
                    <div className="text-sm text-gray-600">{tutor.specialization}</div>
                    <div className="text-indigo-600 font-semibold">${tutor.price}/hour</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={today}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  Select Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-2 rounded-lg border-2 transition-colors ${
                        selectedTime === time
                          ? "border-indigo-600 bg-indigo-600 text-white"
                          : "border-gray-300 text-gray-700 hover:border-indigo-600"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (hours)
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="1">1 hour</option>
                  <option value="1.5">1.5 hours</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any specific topics or questions you'd like to cover?"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-indigo-600" />
                Booking Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Hourly Rate</span>
                  <span className="font-semibold">${tutor.price}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Duration</span>
                  <span className="font-semibold">{duration} hour{duration > 1 ? 's' : ''}</span>
                </div>
                {selectedDate && (
                  <div className="flex justify-between text-gray-700">
                    <span>Date</span>
                    <span className="font-semibold">{selectedDate}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex justify-between text-gray-700">
                    <span>Time</span>
                    <span className="font-semibold">{selectedTime}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-indigo-600">${totalPrice}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Free Cancellation</strong>
                  <br />
                  Cancel up to 24 hours before the lesson for a full refund
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
