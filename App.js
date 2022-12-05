import Header from './Components/Header';
import Form from './Components/Form';
import Todolist from './Components/Todolist';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo]   = useState([]);
  const [editTodo, setEditTodo]   = useState("");
  return (
    <div className="App">
      <div>
      <Header></Header>
      </div>      

      <div>
      <Form input = {input}
        setInput = {setInput}
        todo = {todo}
        setTodo = {setTodo}
        editTodo = {editTodo}
        setEditTodo = {setEditTodo}>
      
      </Form>
      </div>

      <div>
        <Todolist todo = {todo} setTodo ={setTodo} setEditTodo = {setEditTodo}/>
      </div>
    
    </div>
  
    
    );
}

export default App;
