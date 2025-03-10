import { useQuery } from "@tanstack/react-query"
import { fetchUserBalance } from "../../services/apiUser"

export const useBalance = ()=>{
    const {isLoading, data} = useQuery({
        queryKey: ["userBalance"],
        queryFn: fetchUserBalance
    })
    return {isLoading, data}
}