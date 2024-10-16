import "./Job.css";

const Job = function(props){
    return(
    <div>
        <h1>{props.salary}</h1>
        <h2>{props.age}</h2>
        <h2>{props.position}</h2>
    </div>
    )
}

export default Job;