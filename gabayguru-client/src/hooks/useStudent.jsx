import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: isStudent,
    isPending: isStudentLoading,
    isError: isStudentError,
  } = useQuery({
    queryKey: [user?.email, "isStudent"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`users/student/${user?.email}`);
        return res.data?.student;
      } catch (error) {
        // Handle forbidden access error
        if (error.response && error.response.status === 403) {
          return false; // Return default value when access is forbidden
        }
        throw error; // Re-throw other errors
      }
    },
  });

  return [isStudent, isStudentLoading, isStudentError]
};

export default useStudent;
