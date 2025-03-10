import { api } from "./apiAxios";

export const transportBalance = async (transportInfo) => {
    const { data } = await api.post("/getaddbalance/", transportInfo);
    return data;
};

