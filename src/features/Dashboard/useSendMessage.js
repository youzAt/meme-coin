import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../../services/apiChat";

export const useSendMessage = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: sendMessage,
	});

	return { mutate, isPending };
};
