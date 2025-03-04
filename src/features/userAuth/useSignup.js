import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
	const navigate = useNavigate();
	const { mutate, isPending } = useMutation({
		mutationFn: signup,
		onSuccess: (data) => {
			localStorage.setItem("memecoin-access", data.access);
			localStorage.setItem("memecoin-refresh", data.refresh);
			navigate("/");
		},
		onError: (er) => {
			console.log(er.response)
			alert(Object.entries(er.response.data)[0][1][0]);
		},
	});
	return { mutate, isPending };
};
