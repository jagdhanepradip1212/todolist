import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({input, setInput, todo, setTodo, editTodo, setEditTodo}) => {

    const updateTodo = (title, id, completed) =>{
        const newTodo = todo.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodo(newTodo);
        setEditTodo("");
    };

    useEffect(()=>{
        console.log('edittodo',editTodo);
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    }, [setInput, editTodo]);

    const onInputChange = (event)=>{
        console.log(event.target.value);
        setInput(event.target.value);
    };

    const onFormSubmit = (event)=>{
        event.preventDefault();
        if(!editTodo){
            setTodo([...todo, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        }else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
       
        // console.log(input);

    };
    return(
        <>
        <form onSubmit={onFormSubmit}>
            <input type = "text" placeholder="enter data" 
            value={input} 
            required
            onChange={onInputChange}
            />{"  "}
            
            <button>Add</button>
        </form>
        </>
    )
}
export default Form;