import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transportBalance } from "../../services/apiWallet";

export const useTransportBalance = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: transportBalance,
        onSuccess: () => {
            queryClient.invalidateQueries(["userBalance"]);
        },
    });
    return { mutate, isPending };
};
