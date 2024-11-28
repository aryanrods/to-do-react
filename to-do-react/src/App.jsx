import { useState } from 'react'
import './App.css'
import { FaCheck, FaTrash } from 'react-icons/fa'; 

function App() {
  const TodoApp = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([]);
    //handle input changes 
    const handleInputChange = (e) => {
      setTodoInput(e.target.value);
    };







}

  return (
    <>
      
    </>
  )
}

export default App
