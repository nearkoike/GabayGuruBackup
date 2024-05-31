import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: isAdmin,
    isPending: isAdminLoading,
    isError: isAdminError,
  } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`users/admin/${user?.email}`);
        return res.data?.admin;
      } catch (error) {
        // Handle forbidden access error
        if (error.response && error.response.status === 403) {
          return false; // Return default value when access is forbidden
        }
        throw error; // Re-throw other errors
      }
    },
  });

  return [isAdmin, isAdminLoading, isAdminError]
};

export default useAdmin;
