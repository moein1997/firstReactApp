
const Courses = function(props){
    return(
        <div style={{backgroundColor:props.course.isCompleted? "green" : "red"}}>
              <h1>{props.course.courseName}</h1>
              <button onClick={()=>props.DeletCourse(props.course.id)}>X</button>
              <button onClick={()=>{props.completeCourse(props.course.id)}}>completed</button>
        </div>
    )
}

export default Courses;