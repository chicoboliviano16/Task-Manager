import React, {createContext, useState} from 'react'

export const TaskListContext = createContext()
//this will create conttext and save it in the variable

//create a component that includes the state
const TaskListContextProvider = props =>{
    const [tasks] = useState(              //argument with and array with obects
        [
            {title: 'Read the bood', id: 1},
            {title: 'run in the morning', id: 2},
            {title: 'cook a meal', id: 3},
        ]
    )

        //the provider below allows us to share the state through different components
    return (
        //the value propety contains the Tasks data from the state
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;


// https://www.youtube.com/watch?v=fqup-BL3VjI

