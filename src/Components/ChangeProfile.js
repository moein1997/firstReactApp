import { useState } from "react";

// export const ChangeProfile = (props)=>{
//     const [newUsername,setNewUsername] = useState("")
//     return(
//         <div>
//             <input type="text" onChange={(event)=>{setNewUsername(event.target.value)}}></input>
//             <button onClick={()=>{props.setUsername(newUsername)}}>change username</button>
//         </div>
//     );
// }

import { useContext } from "react";
import { ProfileContex } from "../App";

export const ChangeProfile = ()=>{
    const [newUsername,setNewUsername] = useState("");
    const {setUsername} = useContext(ProfileContex);
    return(
        <div>
            <input type="text" onChange={(event)=>{setNewUsername(event.target.value)}}></input>
            <button onClick={()=>{setUsername(newUsername)}}>change username</button>
        </div>
    );
}