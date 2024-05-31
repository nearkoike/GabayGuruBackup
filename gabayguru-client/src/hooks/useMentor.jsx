import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMentor = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: isMentor,
    isPending: isMentorLoading,
    isError: isMentorError,
  } = useQuery({
    queryKey: [user?.email, "isMentor"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`users/mentor/${user?.email}`);
        return res.data?.mentor;
      } catch (error) {
        // Handle forbidden access error
        if (error.response && error.response.status === 403) {
          return false; // Return default value when access is forbidden
        }
        throw error; // Re-throw other errors
      }
    },
  });

  return [isMentor, isMentorLoading, isMentorError]
};

export default useMentor;
