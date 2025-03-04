import { useQuery } from "@tanstack/react-query";
import { fetchUserMessages } from "../../services/apiChat";

export const useMessages = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["userMessages"],
		queryFn: fetchUserMessages,
	});

	return { data, isLoading };
};
