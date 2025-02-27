import { api } from "./apiAxios";

export const signup = async (loginInfo) => {
	const { data } = await api.post("/users/register/", loginInfo);
	return data;
};
