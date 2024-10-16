import {useParams} from "react-router-dom";
import { ChangeProfile } from "../Components/ChangeProfile";
// export const Profile = ()=>{
//     const {name,id} = useParams()
//     return(
//         <div>
//             This is profile page of {name} - {id}
//         </div>
//     )
// }

// export const Profile = (props)=>{
//     const {name,id} = useParams()
//     return(
//         <div>
//             This is profile page of {name} - {id}  - username is {props.username}
//             <ChangeProfile setUsername={props.setUsername}/>
//         </div>
//     )
// }


import { useContext } from "react";
import { ProfileContex } from "../App";

export const Profile = ()=>{
    const {username} = useContext(ProfileContex)
    const {name,id} = useParams()
    return(
        <div>
            This is profile page of {name} - {id}  - username is {username}
            <ChangeProfile />
        </div>
    )
}