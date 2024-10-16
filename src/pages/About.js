import React from "react";
import { useNavigate } from "react-router-dom";
const About = ()=>{
    let navigate = useNavigate()
    return(
        <React.Fragment>
            <div>
                This is about page
            </div>
            <button onClick={()=>{navigate("/")}}>Go to Home page</button>
        </React.Fragment>
    )
};

export default About;