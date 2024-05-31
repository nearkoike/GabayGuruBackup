import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Main from "../layouts/Main";
import StudentDashboard from "../pages/student-dashboard/StudentDashboard";
import LandingPage from "../pages/home/LandingPage";
import Dashboard from "../layouts/Dashboard";
import Auth from "../layouts/Auth";
import SignUpStudent from "../pages/auth/SignUpStudent";
import SignUpMentor from "../pages/auth/SignUpMentor";
import SignInUser from "../pages/auth/SignInUser";
import MentorInformation from "../pages/auth/mentor-signup/MentorInformation";
import MentorSkills from "../pages/auth/mentor-signup/MentorSkills";
import MentorProfile from "../pages/auth/mentor-signup/MentorProfile";
import AboutUs from "../pages/home/About";
import ContactUs from "../pages/home/Contact";
import TermsAndCondition from "../pages/home/TermsAndCondition";
import MentorDashboard from "../pages/mentor-dashboard/MentorDashboard";
import EWallet from "../pages/student-dashboard/EWallet";
import Sessions from "../pages/student-dashboard/Sessions";
import Browse from "../pages/home/BrowseMentor";
import Profile from "../pages/home/MentorProfile";
import BookingComponent from "../components/shared/Booking";
import SessionsMentor from "../pages/mentor-dashboard/SessionsMentor";
import EWalletMentor from "../pages/mentor-dashboard/EWalletMentor";
import SessionRequests from "../pages/mentor-dashboard/SessionRequests";
import Unauthorized from "../components/shared/Unauthorized";
import Missing from "../components/shared/Missing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/terms",
        element: <TermsAndCondition />,
      },

      {
        path:"/BrowseMentor",
        element: <Browse/>
      },

      {
        path:"/Profile",
        element: <Profile/>
      },
      {
        path:"/Booking",
        element:<BookingComponent/>
      },
    
      
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        element: <RequireAuth allowedRoles={["student", "admin"]}/>,
        children: [
          {
            path: "/dashboard/student",
            element: <StudentDashboard />,
          },
          {
            path: "/dashboard/student/sessions",
            element: <Sessions />,
          },
          {
            path: "/dashboard/student/ewallet",
            element: <EWallet />,
          },
        ]
      },
      {
        element: <RequireAuth allowedRoles={["mentor", "admin"]}/>,
        children: [
          {
            path: "/dashboard/mentor",
            element: <MentorDashboard />,
          },
          {
            path: "/dashboard/mentor/sessions",
            element: <SessionsMentor />,
          },
          {
            path: "/dashboard/mentor/ewallet",
            element: <EWalletMentor />,
          },
          {
            path: "/dashboard/mentor/session-requests",
            element: <SessionRequests />,
          },
        ]
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/signin",
        element: <SignInUser />,
      },
      {
        path: "/auth/signup",
        element: <SignUpStudent />,
      },
      {
        path: "/auth/signup/mentor",
        element: <SignUpMentor />,
        children: [
          {
            path: "/auth/signup/mentor/1",
            element: <MentorInformation />,
          },
          {
            path: "/auth/signup/mentor/2",
            element: <MentorSkills />,
          },
          {
            path: "/auth/signup/mentor/3",
            element: <MentorProfile />,
          },
        ],
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/*",
    element: <Missing />,
  },
]);

export default router;
