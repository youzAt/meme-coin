import { useQuery } from "@tanstack/react-query"
import { fetchUserProfile } from "../../services/apiUser"

export const useUserProfile = ()=>{
    const {data, isLoading} = useQuery({
        queryKey: ['userProfile'],
        queryFn: fetchUserProfile
    })

    return {data, isLoading}
}