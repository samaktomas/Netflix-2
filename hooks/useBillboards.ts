import fetcher from "@/libs/fetcher";
import useSwr from "swr";

const useBillboard = () => {
  const { data, error, isLoading } = useSwr("/api/random", fetcher, {
    // the below options not neccessary, just to show what are the options
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
};

export default useBillboard;
