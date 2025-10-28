import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "New Todo",
            isCompleted: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider;

export default function useTodoContext(){
    return useContext(TodoContext)
}