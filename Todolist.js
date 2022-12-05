import React from "react";
const Todolist = ({todo, setTodo, setEditTodo}) => {

    const handleComplete = (todo) => {
        setTodo(
            todo.map((item) => {
                if(item.id === todo.id){
                    return{ ...item, completed: !item.completed};
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) =>{
        console.log('id',id)
        const findTodo = todo.find((todo) => todo.id === id);
        console.log('findtodo',findTodo)
        setEditTodo(findTodo);

    }

    const handleDelete = ({id}) =>{
        setTodo(todo.filter((todo)=> todo.id !== id));
    };
    return (
        <div>
            {todo.map((todo) => (
                <li key = {todo.id}>
                    <input type = "text" value = {todo.title} 
                    onChange = {(event) => event.preventDefault()}
                    
                    />
                    <div>
                        <button onClick={() => handleComplete(todo)}>
                            complete
                        </button>{" "}

                        <button onClick={() => handleEdit(todo)}>
                            edit
                        </button>{" "}

                        <button onClick={()=> handleDelete(todo)}>
                            delete
                        </button>
                    </div>

                </li>
            ))}
        </div>
    )
}
export default Todolist;