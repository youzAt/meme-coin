import { api } from "./apiAxios"

export const sendMessage = (chatInfo) =>{
    const {data} = api.post("/messenger/sendmessege/", [chatInfo]);
    return data
}

export const fetchUserMessages = ()=>{
    const {data} = api.get("/messenger/readmesseges/");
    return data
}