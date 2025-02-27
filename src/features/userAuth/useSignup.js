import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiUser";

export const useSignup = () => {
	const {mutate , isPending } = useMutation({
		mutationFn: signup,
	});
	return {mutate ,isPending };
};
