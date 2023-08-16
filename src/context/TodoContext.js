import React, { useReducer, createContext, useEffect } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

      const reducer = (myTasks, action) => {
        switch(action.type) {
            case 'add_task':
                return [...myTasks,{
                    id: action.task.id,
                    text: action.task.text,
                    status: action.task.status,
                }]

            case 'remove_task':
                return myTasks.filter(task => task.id !== action.id)

            case 'update_task':
                return myTasks.map((task) => (task.id === action.id ? action.updatedTask: task))

            default:
                return myTasks;
        }
    }

    const [myTasks, dispatch] = useReducer(reducer, [],
        
        () => {
            const myTasks = localStorage.getItem('myTasks')
            return myTasks ? JSON.parse(myTasks) : []; 
        }
        
        )

      useEffect(() => {
          localStorage.setItem('myTasks',JSON.stringify(myTasks));
      })

      return(
          <TodoContext.Provider value={{ myTasks, dispatch }} >
              {props.children}
          </TodoContext.Provider>
      )

}
export default TodoContextProvider;