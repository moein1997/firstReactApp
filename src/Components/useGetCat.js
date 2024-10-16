import Axios from "axios";

import { useQuery } from "react-query"

export const useGetCat = ()=>{
    const {data,isLoading,refetch} = useQuery(["cat"],async()=>{
        return Axios.get("https://catfact.ninja/fact")
        .then((response)=>response.data);
    });

    const refetchData = ()=>{
        alert("data refetched");
        refetch()
    };

    return {data,isLoading,refetchData};
}