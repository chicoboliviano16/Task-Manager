import React, {createContext, useState, useEffect} from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext()
//this will create conttext and save it in the variable

//create a component that includes the state
const TaskListContextProvider = props =>{
    const initialState = JSON.parse(localStorage.getItem('tasks')) || [] 


    const [tasks, setTasks] = useState(initialState)              //argument with and array with obects
    
    //to create a new task we need to define its title and id...update the state when adding a new task
    //https://www.youtube.com/watch?v=fqup-BL3VjI      at 27.50

        const [editItem, setEditItem] = useState(null)
    //make the pagee save the data when it reloads
    useEffect(()=>{    //taks t2 arguents the function and the [task] after the coma
        localStorage.setItem('tasks', JSON.stringify(tasks)) //save all data in Json format
    },[tasks])//run useEffect hook once array its updated

    const addTask= (title) =>{
        setTasks([...tasks, {title, id:uuid()}])
    }
    const removeTask = id => {   //this fuction has one parameter and its Id
        setTasks(tasks.filter(task => task.id !== id))
                //the filter method will keep the item in the array or will filter the item out.
                //if true task will be kept inthe array and if false youll get a new array with a filtered deleted task 
    }
    const clearList = () =>{
        setTasks([])
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id) 
        setEditItem(item);
    }

    const editTask = (title,id) =>{
        //create a new variable so it doesnt change the id 
        const newTasks = tasks.map(task=>(task.id===id) ? { title,id } : task)  // if task id is equal to id the return new title+id. otherwise return same task 
        setTasks(newTasks); //update the state
        setEditItem(null)
    }

        //the provider below allows us to share the state through different components
    return (
        //the value propety contains the Tasks data from the state
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, editItem}}>
            {props.children}  
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;


// https://www.youtube.com/watch?v=fqup-BL3VjI

