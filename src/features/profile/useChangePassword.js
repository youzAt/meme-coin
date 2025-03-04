import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../../services/apiUser";

export const useChangePassword = () => {
	const { mutate, isPeding } = useMutation({
		mutationFn: changePassword,

		onSuccess: () => {
			alert("رمز عبور شما با موفقیت تغییر یافت");
		},
		onError: (er) => {
			if ("error" in Object.entries(er.response.data)[0][1]){
                alert(Object.entries(er.response.data)[0][1].error)
            }else{
                alert(Object.entries(er.response.data)[0][1][0])

            }
		},
	});

	return { mutate, isPeding };
};
