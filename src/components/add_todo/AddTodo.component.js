import './AddTodo.styles.css'
export const AddTodo= (props) => {
    const Submitistener=(e)=>{
        e.preventDefault()
        //checking if input field is empty by checking the inptText value which changes with onChangeListener
        if(props.inputTodos===""){}
        else{
              props.setTodos([
                            ...props.todos,
                            {text:props.inputTodos,id:Math.floor(Math.random() * Math.floor(10000)),completed:false}
                         ])
              props.setInputTodos("")//clearing the field
        }
    }
    //function which updates the value of inputTodos depending on the entered input.
    const onChangeListener= (e)=>{
          props.setInputTodos(e.target.value)      
       
    }


    return (
             <form className='addTodo'  onSubmit={Submitistener} >
             <div style={{display:'flex'}}><input type='text' name='inptTodo' placeholder='Remind Me To'  onChange={onChangeListener} value={props.inputTodos}/>    <button id='addTodo'><i className="fas fa-plus-square"></i></button></div>        
             <select onChange={(e)=>props.setStatus(e.target.value)}><option>All</option><option>Pending</option><option>Completed</option></select>
             </form>

    )
}
