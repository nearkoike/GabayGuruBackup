import { Navigate, Outlet, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useMentor from "../hooks/useMentor";
import useStudent from "../hooks/useStudent";

const RequireAuth = ({ allowedRoles }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  //const [isAdmin] = useAdmin();
  // const [isMentor] = useMentor();
  // const [isStudent] = useStudent();

  // // Determine the role based on the values returned by the hooks
  // let role = "";
  // if (isAdmin) {
  //   role = "admin";
  // } else if (isMentor) {
  //   role = "mentor";
  // } else if (isStudent) {
  //   role = "student";
  // }
  // console.log(role);

  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (user) {
    return <Outlet/>
  }

  // if (allowedRoles.includes(role)) {
  //   return <Outlet />;
  // }

  // if (!allowedRoles.includes(role)) {
  //   <Navigate to="/unauthorized" state={{ from: location }} replace></Navigate> 
  // }

  // return (
  //   <Navigate to="/auth/signin" state={{ from: location }} replace></Navigate>
  // );
};

export default RequireAuth;
