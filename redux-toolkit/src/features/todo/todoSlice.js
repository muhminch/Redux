import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text : 'test'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const { addToDo, removeTodo } = todoSlice.actions

export const todoReducer = todoSlice.reducer