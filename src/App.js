// import logo from './logo.svg';
// import styles from './App.css';
// import { useState } from "react"
import "./App.css"
import { Form } from "./Form";
// import { Fact } from "./Fact";
// import ClassBaseTestComponent from "./ClassBaseTestComponent";
// import {Cat}  from "./Components/Cat";
// import { QueryClient,QueryClientProvider } from "react-query";

// import { useToggle } from "./Components/useToggle";
// import  SubmitForm from "./Components/SubmitForm";

// import Job from './Job';


// const User = function(props){
//   return(
//     <h1>{props.name} : {props.age}</h1>
//   )
// }

// import { useState } from "react";

// import Courses from "./courses";

// import Text from "./Text";

// import Axios from "axios"

// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

// import Home from "./pages/Home";

// import Contact from "./pages/Contact";

// import About from "./pages/About";

// import { Nav } from "./pages/Nav";

// import { Profile } from "./pages/Profile";
// import { useState,createContext } from "react";

// import { QueryClient,QueryClientProvider } from "react-query";

// export const ProfileContex = createContext()

function App() {

  return (
    <>
        <Form />
    </>
);

  // return(
  //   <>
  //     <Fact/>
  //   </>
  // )
  
  // return(
  //   <>
  //     <ClassBaseTestComponent/>
  //   </>
  // )
  // const queryClient = new QueryClient();

  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <div className="App">
  //       <Cat />
  //     </div>
  //   </QueryClientProvider>
  // );

  // // const [isVisible,setIsVisible] = useToggle(true);

  // // const [isVisible2,setIsVisible2] = useToggle(true);

  // const {state:isVisible,toggle:setIsVisible} = useToggle(true);

  // const {state:isVisible2,toggle:setIsVisible2} = useToggle(true);

  // return(
  //   <div className="App">
  //     <button onClick={setIsVisible}>
  //       {isVisible? "Hide":"Show"}
  //     </button>
  //     {isVisible && <h1>Hi! This is my first hidden text</h1>}

  //     <button onClick={setIsVisible2}>
  //       {isVisible2? "Hide":"Show"}
  //     </button>
  //     {isVisible2 && <h1>Hi! This is my second hidden text</h1>}
  //   </div>
  // )

  // return(
  //   <div>
  //     <SubmitForm/>
  //   </div>
  // )


  // const [username,setUsername] = useState("Moein")

  // const client = new QueryClient({defaultOptions:{
  //   queries:{refetchOnWindowFocus:false},
  //   // mutations:{}
  // }});

  // return(
  //   <div className="App">
  //     <QueryClientProvider client={client}>
  //       <ProfileContex.Provider value={{username,setUsername}}>
  //         <Router>
  //           <div>Moein</div>
  //           {/* <nav>
  //             <Link to="/">Home</Link> |
  //             <Link to="/About">About</Link> |
  //             <Link to="/contact">Contact Me</Link> |
  //           </nav> */}

  //           <Nav/>
  //           <Routes>
  //             <Route path="/" element={<Home />}/>
  //             <Route path="/about" element={<About />}/>
  //             <Route path="/contact" element={<Contact />}/>
  //             <Route path="/profile/:name?/:id?" element={<Profile />}/>
  //             <Route path="*" element={<div>Not Found</div>}/>
  //           </Routes>
  //           <div>This is footer</div>
  //         </Router>
  //       </ProfileContex.Provider>
  //     </QueryClientProvider>
  //   </div>
  // )

  // const [username,setUsername] = useState("Moein")

  // return(
  //   <div className="App">
  //     <Router>
  //       <div>Moein</div>
  //       {/* <nav>
  //         <Link to="/">Home</Link> |
  //         <Link to="/About">About</Link> |
  //         <Link to="/contact">Contact Me</Link> |
  //       </nav> */}

  //       <Nav/>
  //       <Routes>
  //         <Route path="/" element={<Home username={username}/>}/>
  //         <Route path="/about" element={<About />}/>
  //         <Route path="/contact" element={<Contact />}/>
  //         <Route path="/profile/:name?/:id?" element={<Profile username={username} setUsername={setUsername} />}/>
  //         <Route path="*" element={<div>Not Found</div>}/>
  //       </Routes>
  //       <div>This is footer</div>
  //     </Router>
  //   </div>
  // )

  // return(
  //   <div className="App">
  //     <Router>
  //       <div>Moein</div>
  //       {/* <nav>
  //         <Link to="/">Home</Link> |
  //         <Link to="/About">About</Link> |
  //         <Link to="/contact">Contact Me</Link> |
  //       </nav> */}

  //       <Nav/>
  //       <Routes>
  //         <Route path="/" element={<Home />}/>
  //         <Route path="/about" element={<About />}/>
  //         <Route path="/contact" element={<Contact />}/>
  //         <Route path="/profile/:username?/:id?" element={<Profile />}/>
  //         <Route path="*" element={<div>Not Found</div>}/>
  //       </Routes>
  //       <div>This is footer</div>
  //     </Router>
  //   </div>
  // )


  // const [excuse,setExcuse] = useState("");

  // const fetchExcuse = (exc)=>{
  //   Axios(`https://excuser-three.vercel.app/v1/excuse/${exc}`).then((response)=>{
  //     setExcuse(response.data[0].excuse);
  //   })
  // };

  // return(
  //   <div className="App">
  //     <h1>Genetate an excuse</h1>
  //     <button onClick={()=>fetchExcuse("party")}>party</button>
  //     <button onClick={()=>fetchExcuse("family")}>family</button>
  //     <button onClick={()=>fetchExcuse("office")}>office</button>
  //     <h1>{excuse}</h1>
  //   </div>
  // );


  // const [name,setName] =useState("");

  // const [predictedResult,setPredicteResult] = useState({});

  // const fetchAge = ()=>{
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((response)=>{
  //     console.log(response.data);
  //     setPredicteResult(response.data)
  //   })
  // }

  // return(
  //   <div className="App">
  //     <input placeholder="Ex. Moein" type="text" onChange={(event)=>setName(event.target.value)}></input>
  //     <button onClick={fetchAge}>Predict age</button>
  //     <h1>age is: {predictedResult?.age}</h1>
  //     <h1>name is: {predictedResult?.name}</h1>
  //   </div>

  // );

  // fetch("https://catfact.ninja/fact").then((response)=>response.json()).then((data)=>{
  //   console.log(data)
  // })

  // const [catFact, setCatFact] = useState("");

  // useEffect(() => {
  //   fetchFact()
  // }, [])

  // const fetchFact =()=>{
  //   Axios.get("https://catfact.ninja/fact").then((response) => {
  //     console.log(response.data);
  //     setCatFact(response.data.fact)
  //   })
  // };


  // return (
  //   <div className="App">
  //     <button onClick={fetchFact}>fetch data</button>
  //     <p>{catFact}</p>
  //   </div>
  // )

  // const [showText,setShowText] = useState(false);

  // return(
  //   <div className="App">
  //     <button onClick={()=>{setShowText(!showText)}}>Show Text</button>
  //     {showText && <Text/>}
  //   </div>
  // )


  // const [courseList,setCourseList] =useState([]);

  // const [newCourse,setNewCourse] = useState("");

  // const handleChange = (event)=>{
  //   setNewCourse(event.target.value);
  // }

  // const addCourse =()=> {

  //   const course = {
  //     id : courseList.length ===0 ? 1 : courseList[courseList.length -1].id +1,
  //     courseName:newCourse,
  //     isCompleted : false
  //   }
  //    setCourseList([...courseList,course]);
  // }

  // const DeletCourse = (courseId)=>{
  //   const newCourseList = courseList.filter((course)=>{
  //     if(course.id===courseId) return false
  //     else return true
  //   })
  //   setCourseList(newCourseList)
  // }

  // const completeCourse = (courseId)=>{
  //   const newCourseList = courseList.map((course)=>{
  //     if(course.id === courseId) return {...course,isCompleted : !course.isCompleted} 
  //     else return course
  //   })
  //   setCourseList(newCourseList)
  // }

  // return(
  //   <div className="App">
  //     <div className="add-course">
  //       <input type="text" onChange={handleChange}></input>
  //       <button onClick={addCourse}>Add course</button>
  //     </div>
  //     <div className="list">
  //       {courseList.map((course,index)=>{
  //         return(
  //           <Courses key={index} course={course} DeletCourse={DeletCourse} completeCourse = {completeCourse} />
  //         )
  //       })}
  //     </div>
  //   </div>
  // );

  // const [courseList,setCourseList] =useState([]);

  // const [newCourse,setNewCourse] = useState("");

  // const handleChange = (event)=>{
  //   setNewCourse(event.target.value);
  // }

  // const addCourse = ()=>{
  //   const newCourseList = [...courseList,newCourse];
  //   setCourseList(newCourseList);
  // }

  // const DeletCourse = (courseName)=>{
  //   const newCourseList = courseList.filter((course)=>{
  //     if(course===courseName) return false
  //     else return true
  //   })
  //   setCourseList(newCourseList)
  // }

  // return(
  //   <div className="App">
  //     <div className="add-course">
  //       <input type="text" onChange={handleChange}></input>
  //       <button onClick={addCourse}>Add course</button>
  //     </div>
  //     <div className="list">
  //       {courseList.map((course,index)=>{
  //         return(
  //           <div>
  //             <h1 key={index}>{course}</h1>
  //             <button onClick={()=>DeletCourse(course)}>X</button>
  //           </div>
  //         )
  //       })}
  //     </div>
  //   </div>
  // );

  // const [count,setCount] = useState(0)

  // return(
  //   <div>
  //     <button onClick={()=>{setCount(count+1)}}>increase</button>
  //     <button onClick={()=>{setCount(count-1)}}>decrease</button>
  //     <button onClick={()=>{setCount(0)}}>set to 0</button>
  //     <h1>{count}</h1>
  //   </div>
  // )


  // const [textColor,setTextColor] = useState("red");

  // return(
  //   <div>
  //     <button onClick={()=>{setTextColor(textColor === "green" ? "red":"green")}}>change color</button>
  //     <h1 style={{color:textColor}}>Moein</h1>
  //   </div>
  // )

  // const [showText,setShowText] = useState(true);

  // const toggleText = ()=>{
  //   setShowText(!showText)
  // }

  // return(
  //   <div>
  //     <button onClick={toggleText}>Show/Hide</button>
  //     {showText && <h1>Moein</h1>}
  //   </div>
  // )

  // const [inputValue,setInputValue] = useState("")

  // return(
  //   <div>
  //     <input type="text" onChange={(event)=>{setInputValue(event.target.value)}}></input>
  //     <h1>{inputValue}</h1>
  //   </div>
  // )

  // const [age,setAge] = useState(0)

  // return(
  //   <div className="App">
  //     <h1>{age}</h1>
  //     <button onClick={()=>{setAge(age+1)}}>Increase age</button>
  //     <button onClick={()=>{setAge(age-1)}}>Decrease age</button>
  //   </div>
  // )


  // const [age,setAge] = useState(0)

  // const increaseAge = () =>{
  //   setAge(age+1)
  //   console.log(age)
  // }

  // return(
  //   <div className="App">
  //     <h1>{age}</h1>
  //     <button onClick={increaseAge}>Increase age</button>
  //   </div>
  // )

  // let age = 0;

  // const increaseAge = () =>{
  //   age = age +1;
  //   console.log(age)
  // }

  // return(
  //   <div className="App">
  //     <h1>{age}</h1>
  //     <button onClick={increaseAge}>Increase age</button>
  //   </div>
  // )

  // const classes = [
  //   {name:"html",finished:true},
  //   {name:"javascript",finished:false},
  //   {name:"css",finished:true},
  //   {name:"bootstrap",finished:false},
  //   {name:"react",finished:true},
  //   {name:"python",finished:false},
  // ]

  // return(
  //   <div>
  //     {classes.map((cls,index)=>{
  //       return cls.finished===true && <h2 key={index}>{cls.name}</h2>
  //     })}
  //   </div>
  // )

  // const users = [
  //   {name:"Moein",age:27},
  //   {name:"Mahdi",age:30},
  //   {name:"Nima",age:33},
  // ]

  // return(
  //   <div>
  //     {users.map((user,index)=>{
  //       return <User key={index} name={user.name} age={user.age}/>
  //     })}
  //   </div>
  // )

  // return(
  //   <div>
  //     {users.map((user,index)=>{
  //       return <h1 key={index}>{user.name} : {user.age}</h1>
  //     })}
  //   </div>
  // )

  // const names = ["Moein","Mahdi","Nima"];

  // return(
  //   <div className="App">
  //     {names.map((name,index)=>{
  //       return(
  //         <h1 key={index}>{name}</h1>
  //       )
  //     })}
  //   </div>
  // )

  // return(
  //     <div className="App">
  //       <h1>{names[0]}</h1>
  //       <h1>{names[1]}</h1>
  //       <h1>{names[2]}</h1>
  //     </div>
  // );

  // const T = 15;

  // const G = 3

  // const name = "Moein"

  // return(
  //   <div className="App">
  //     {G===2 && <h2>My name is {name}</h2>}
  //     <Job salary={25000000} age={30} position="DataScientist" />

  //     <button type='submit' className={G>0 ? "type1" : "type2"} style={{fontSize:G>0? "20px" : "30px",color:G>0? "blue" : "yellow"}}>click me</button>

  //   </div>
  // )

  // return(
  //   T>10 && G ===2 ?
  //     <div className={styles.App}>
  //       <Job salary={15000000} age={27} position="R&D" />
  //       </div>
  //   :
  //     <div className={styles.App}>
  //     <Job salary={25000000} age={30} position="DataScientist" />
  //     </div>

  // );

  // return(

  //   T>=10?
  //     <div className={styles.App}>
  //     <Job salary={15000000} age={27} position="R&D" />
  //     </div>
  //     :
  //     <div className={styles.App}>
  //     <Job salary={25000000} age={30} position="DataScientist" />
  //     </div>
  // );

  // if (T>=10){
  //   return (
  //     <div className={styles.App}>
  //       <Job salary={15000000} age={27} position="R&D" />
  //     </div>
  //   );
  // }else{
  //   return (
  //     <div className={styles.App}>
  //       <Job salary={25000000} age={30} position="DataScientist" />
  //     </div>
  //   );
  // }

}

export default App;