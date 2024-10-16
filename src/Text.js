import { useEffect,useState } from "react";

const Text = () =>{
    const [text,setText] = useState("")

    useEffect(()=>{
        console.log("component mounted!")
        return ()=>{
            console.log("component unmounted")
        }
    },[])

    useEffect(()=>{
        console.log("component updated!")
    },[text])

    return(
        <div>
        <input onChange={(e)=>{setText(e.target.value)}}></input>
        <h1>{text}</h1>
        </div>
    );
}

export default Text;