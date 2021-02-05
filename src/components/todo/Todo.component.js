import React from 'react'
import './Todo.styles.css'

export const Todo = ({todo,setTodos,todos}) => {
    
    const deleteHandler=()=>{
         setTodos(todos.filter(et=>et.id !== todo.id))
    }
    const checkHandler=()=>
        { 
               setTodos(todos.map(t=>
                (
                    t.id===todo.id?{...t,completed:!t.completed}:t
                )))
        }
    return (
        <li className={`todo ${todo.completed? "completed": ''}` }><h5>{todo.text}</h5> <div><button onClick={checkHandler} className='check'><i className="far fa-check-circle"></i></button><button className='delete' onClick={deleteHandler}><i className="far fa-trash-alt"></i></button></div></li>
    )
}
