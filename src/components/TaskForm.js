import React, {useContext, useState, useEffect} from 'react'   //rafce functional component
//useContext above is a hook
import {TaskListContext} from '../context/TaskListContext'

//add input fiel and 2 buttons to add tasks and clear
const TaskForm = () => {
//in order to get access to usetask function we need to use useContext hook

    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)  //accessto addTask function

    const [title, setTitle] = useState('')

    //the e means. As the parameter we pass an event oject hence the e
    const handleChange = e => {
        setTitle(e.target.value)
        // console.log(title);
        
    }
    const handleSubmit = e => {
        e.preventDefault();   //prevents the page from reaoading
        if(editItem === null){
            addTask(title) 
            setTitle("")
        } else {
            editTask(title, editItem.id)
        }
    }
    useEffect(() =>{
        if(editItem !== null){
            setTitle(editItem.title)  //change value of title 
            console.log(editItem);
        }else{  //if false
            setTitle("")
        }
    }, [editItem])
    
        


    return (

        <form onSubmit={handleSubmit} className="form">
           <input onChange = {handleChange} 
                  type="text"
                  value={title} 
                  className="task-input" 
                  placeholder="Add Task.." 
                  required
            /> 
        <div className="buttons">
            <button type="submit" className="btn add-task-btn">
                {editItem ? 'Edit Task' : 'Add Task'} 
                {/* if true make the value of button to edit task, if not then add task */}
            {/*the ternary operator is the same as saying editItem !== null */}
            </button>
            <button onClick={clearList} className="btn clear-btn">
                clear
            </button>
        </div>
        
        </form>
    )
}

export default TaskForm
