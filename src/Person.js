import propTypes from "prop-types"
export const Person = (props)=>{
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <h2>Email : {props.email}</h2>
            <h3>Age : {props.isMarried ? "yes" : "No"}</h3>
            {props.courses.map((course)=>(
                <h4 key={course}> {course} </h4>
            ))}
        </div>
    )
}

Person.propTypes = {
    name : propTypes.string,
    email : propTypes.string,
    age : propTypes.number,
    isMarried : propTypes.bool,
    courses : propTypes.arrayOf(propTypes.string)
}