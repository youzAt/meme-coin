import { api } from "./apiAxios";

export const signup = async (userSignupInfo) => {
	const { data } = await api.post("/users/register/", userSignupInfo);
	return data;
};

export const login = async (userloginInfo) => {
	const { data } = await api.post("/users/login/", userloginInfo);
	return data;
};
