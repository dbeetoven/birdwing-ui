import React, { useReducer }  from 'react'
import { TodosContext } from './TodoContext'
import  {todosReducer} from './TodoReducer'

const initialState = {
    todos: []
}
// eslint-disable-next-line react/prop-types
export function TodoContextProvider({ children }) {

    // eslint-disable-next-line no-undef
    const [state, dispatch] = useReducer(todosReducer, initialState)


    function fetchTodos(todos) {
        dispatch({
            type: 'FETCH_TODOS',
            payload: todos,
        })
    }

    function saveTodo(todo) {
        dispatch({
            type: 'SAVE_TODO',
            payload: todo,
        })
    }
    return (
        <TodosContext.Provider  value={{ todos: state.todos, fetchTodos, saveTodo, }}>
            {children}
        </TodosContext.Provider>
    )
}
