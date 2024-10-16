// const Home = ()=>{
//     return(
//         <div>
//             This is home page
//         </div>
//     )
// };

// const Home = (props)=>{
//     return(
//         <div>
//             This is home page. username is {props.username}
//         </div>
//     )
// };

// export default Home;

import { useContext } from "react";
import { ProfileContex } from "../App";

import { useQuery } from "react-query";
import Axios from "axios";

const Home = ()=>{
    const {username} = useContext(ProfileContex);
    const {data:catData,isLoading,isError,error,refetch} = useQuery(["cat"] , ()=>{
        return Axios.get("https://catfact.ninja/fact").then((response) => response.data)
    })
    if(isLoading)
        return <h2>isLoading ...</h2>

    if(isError)
        return <h2>Sorry there was an error: error was : {error.message}</h2>
    return(
        <div>
            This is home page. username is {username}
            <h1>{catData?.fact}</h1>
            <button onClick={refetch}>Update</button>
        </div>
    )
};

export default Home;