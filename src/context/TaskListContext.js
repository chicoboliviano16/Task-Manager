import React, {createContext, useState} from 'react'

export const TaskListContext = createContext()
//this will create conttext and save it in the variable

//create a component that includes the state
const TaskListContextProvider = () =>{
    useState(              //argument with and array with obects
        [
            {task: 'Read the bood', id: 1},
            {task: 'Read the bood', id: 2},
            {task: 'Read the bood', id: 3},
        ]
    )


    return <div>Task List Context</div>
}

export default TaskListContextProvider;


// https://www.youtube.com/watch?v=fqup-BL3VjI

