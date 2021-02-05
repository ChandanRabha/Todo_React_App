import './TodoList.styles.css'
import {Todo} from '../../components/todo/Todo.component'
export const TodoList= ({todos,setTodos,filterTodos}) => {
    return (
        <div className='todoContainer'>
            <h2> Your Todo List</h2>
            <ul>         {    
            filterTodos.map(todo =>(
                  <Todo key={`${todo.id} ${Math.random(1000)}`} todo={todo} setTodos={setTodos} todos={todos} />
            ))
            }
            </ul>
        </div>
    )
}
