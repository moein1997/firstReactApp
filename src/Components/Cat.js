import { useGetCat } from "./useGetCat"

export const Cat = ()=>{
    const {data:catData,isLoading,refetchData} = useGetCat()
    if(isLoading)return <h2>Loading...</h2>
    return(
        <div>
            <button onClick={refetchData}>Refetch data</button>
            <h1>{catData?.fact}</h1>
        </div>
    )
}