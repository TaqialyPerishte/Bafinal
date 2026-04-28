import { createBrowserRouter } from "react-router";
import Home from "./screens/Home";
import TutorList from "./screens/TutorList";
import Comparison from "./screens/Comparison";
import TutorProfile from "./screens/TutorProfile";
import Booking from "./screens/Booking";
import Confirmation from "./screens/Confirmation";
import Favorites from "./screens/Favorites";
import NotFound from "./screens/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/tutors",
    Component: TutorList,
  },
  {
    path: "/compare",
    Component: Comparison,
  },
  {
    path: "/tutor/:id",
    Component: TutorProfile,
  },
  {
    path: "/booking/:id",
    Component: Booking,
  },
  {
    path: "/confirmation",
    Component: Confirmation,
  },
  {
    path: "/favorites",
    Component: Favorites,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
