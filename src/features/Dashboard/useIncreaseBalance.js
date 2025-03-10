import { useMutation, useQueryClient } from "@tanstack/react-query";
import { increaseUserBalance } from "../../services/apiUser";

export const useIncreaseBalance = () => {
    const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: increaseUserBalance,
        onSuccess: ()=>{
            queryClient.invalidateQueries(["userBalance"])
        }
	});
	return { mutate, isPending };
};
