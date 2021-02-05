import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {AddTodo} from './components/add_todo/AddTodo.component'
import {TodoList} from './components/todoList/TodoList.component'
import {useState,useEffect} from 'react';
function App() {
  const [inputTodos,setInputTodos]= useState('');
  const [todos,setTodos]= useState([])
  const [status,setStatus]=useState('completed')
  const [filterTodos,setFilterTodo]= useState(['']);

    useEffect(()=>{
      getLocalTodos();
    },[])
    useEffect(()=>{
      statCheck();
      saveLocalTodos();
      // eslint-disable-next-line
    },[todos,status]);

  const statCheck=()=>{
    switch (status){
      case "Completed":
        setFilterTodo(todos.filter(td=>td.completed===true))
        break;
      case "Pending":
        setFilterTodo(todos.filter(td=>td.completed===false))
        break;
      case "All":
        setFilterTodo(todos)
        break;
      default:
        setFilterTodo(todos)
        break;
    }
  }
  //save todos to local storage
const saveLocalTodos=()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}
const getLocalTodos=()=>{
  if(!localStorage.getItem('todos')){
    localStorage.setItem('todos',JSON.stringify([]))
  }
  else{
   setTodos(JSON.parse(localStorage.getItem('todos')))
  }
}

    return (
    <div className="App">
      <h2>TODO REACT APP</h2>
      <AddTodo setInputTodos={setInputTodos} inputTodos={inputTodos} todos={todos} setTodos={setTodos} setStatus={setStatus}  />
      <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

