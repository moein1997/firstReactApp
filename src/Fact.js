import Axios from "axios";

import {useReducer } from "react";
import { factReducer, initialState } from "./factReducer";

export const Fact = ()=>{
    const [state,dispatch] = useReducer(factReducer,initialState)

    const handleFetch = ()=>{
        dispatch({type : "Fetch_start"})
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            dispatch({type : "Fetch_success",data : res.data.fact});
            console.log(res);
        })
        .catch((error)=>{
            dispatch({type : "Fetch_error"})
            console.log(error);
        })
    }

    return(
        <div>
            <button onClick={handleFetch}>{state.loading ? "is loading" : "fetch cat Fact"}</button>
            {state.error && (<p>Error somthing is wrong</p>)}
            <h1>{state.fact}</h1> 
        </div>
    )
}