import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "../../services/apiUser";

export const useUpdateProfile = () => {
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationFn: updateUserProfile,
		onSuccess: () => {
			queryClient.invalidateQueries(["userProfile"]);
		},
	});
	return { mutate, isPending };
};
