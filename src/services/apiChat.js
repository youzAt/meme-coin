import { api } from "./apiAxios";

export const sendMessage =async (chatInfo) => {
	const { data } = await api.post("/messenger/sendmessege/", chatInfo);
	return data;
};

export const fetchUserMessages = async () => {
	const { data } = await api.get("/messenger/readmesseges/");
	return data;
};
