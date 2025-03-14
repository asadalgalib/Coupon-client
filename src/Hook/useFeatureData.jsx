import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFeatureData = () => {
    const axiosHook = useAxios()

    const { data: featureData, isLoading: isFeatureLoading, error, refetch } = useQuery({
        queryKey: ['featureData'],
        queryFn: async () => {
            const res = await axiosHook.get('/feature/coupon');
            return res.data;
        }
    })
    return [featureData, isFeatureLoading, error, refetch];
};

export default useFeatureData;