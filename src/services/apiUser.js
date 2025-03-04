import { api } from "./apiAxios";

export const signup = async (userSignupInfo) => {
	const { data } = await api.post("/users/register/", userSignupInfo);
	return data;
};

export const login = async (userloginInfo) => {
	const { data } = await api.post("/users/login/", userloginInfo);
	return data;
};

export const fetchUserBalance = async () => {
	const { data } = await api.get("/getaddbalance/");
	return data;
};

export const increaseUserBalance = async (balance)=>{
	const {data} = await api.post('/getaddbalance/', {balance});
	return data;
}

export const fetchUserProfile = async ()=>{
	const {data} = await api.get('/users/profile/update/')
	return data
}

export const updateUserProfile = async (userProfile)=>{
	const {data} = await api.put('/users/profile/update/', userProfile);
	return data;
}

export const changePassword = async (userPassword)=>{
	const {data} = await api.put('/users/changepassword/', userPassword);
	return data;
}