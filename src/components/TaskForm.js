import React from 'react'   //rafce functional component

//add input fiel and 2 buttons to add tasks and clear
const TaskForm = () => {
    return (
        <form className="form">
           <input type="text" className="task-input" placeholder="Add Task.." required/> 
        <div className="buttons">
            <button type="submit" className="btn add-task-btn">
                Add Task
            </button>
            <button className="btn clear-btn">
                clear
            </button>
        </div>
        
        </form>
    )
}

export default TaskForm
