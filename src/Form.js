import { useReducer, useRef } from "react";
import { formReducer,initialState } from "./formReducer";

export const Form = ()=>{
    const [state,dispatch] = useReducer(formReducer,initialState)

    const handleInputChange = (event)=>{
        dispatch({type: "change_input",data : {name:event.target.name ,value:event.target.value}})
    }

    const tagRef = useRef()
    const handleTags = ()=>{
        const tags = tagRef.current.value.split(",")
        tags.forEach(t =>{
            dispatch({type : "add_tag", data : t})
        })
    }

    console.log(state);
    return(
        <div>
            <form>
                <input type="text" placeholder="عنوان" name="title" onChange={handleInputChange}/>
                <input type="text" placeholder="توضیح" name="description" onChange={handleInputChange}/>
                <input type="number" placeholder="قسمت" name="price" onChange={handleInputChange}/>
                <p>مجموعه</p>
                <select name="category" onChange={handleInputChange}>
                    <option value="bag">کیف</option>
                    <option value="shoes">کفش</option>
                    <option value="dress">لباس</option>
                </select>
                <p>تگ</p>
                <textarea placeholder="tags" ref={tagRef}></textarea>
                <br />
                <button type="button" onClick={handleTags}>انتخاب تگ</button>
                {state.tags.map((tag)=>{
                    return <button key={tag} onClick={()=>dispatch({type : "remove_tag" , data : tag})}>{tag}</button>
                })}
                <div style={{ marginTop: "20px"}}>
                    <button type="button" onClick={()=>{dispatch({type: "increase"})}}>+</button>
                   تعداد {state.quantity}
                   <button type="button" onClick={()=>{dispatch({type: "decrease"})}}>-</button>
                </div>
            </form>
        </div>
    )
}