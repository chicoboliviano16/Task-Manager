import React from 'react'  //rafce
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import '../App.css'
import TaskListContextProvider from '../context/TaskListContext'

const App = () => {
    return (
        <TaskListContextProvider>
        <div className="test">    
        
                <div className="app-wrapper">
                    <div className="main">
                    <TaskForm />    
                    <TaskList />
                    </div>
                </div>
                 
        
        </div>
        </TaskListContextProvider>
    )
}

export default App
