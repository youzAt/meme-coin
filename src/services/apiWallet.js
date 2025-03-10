import { api } from "./apiAxios";

export const increaseUserBalance = async (transportInfo) => {
    const { data } = await api.post("/getaddbalance/", transportInfo);
    return data;
};

export const transactionList = async () => {
    const { data } = await api.get("/getaddbalance/");
    return data;
};
