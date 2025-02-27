import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
	const navigate = useNavigate();
	const { mutate, isPending } = useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			localStorage.setItem("memeCoin-access", data.access);
			localStorage.setItem("memeCoin-refresh", data.refresh);
			navigate("/");
		},
		onError: () => {
			alert("نام کاربری یا رمز عبور وارد شده اشتباه است");
		},
	});

	return { mutate, isPending };
};
