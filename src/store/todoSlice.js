import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        // todo: {}
    },
    reducers: {
        addTodo(state, action) {
            console.log(state);
            console.log(action);

            state.todos.push({
                text: action.payload.text,
                id: Date.now(),
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id!== action.payload.id)
        },
        hendelCompleted(state, action) {
            const completedTodo = state.todos.find( todo => todo.id === action.payload.id)
            completedTodo.completed = !completedTodo.completed
        }   
    }
});
export const {addTodo, removeTodo, hendelCompleted} = todoSlice.actions;
export default todoSlice.reducer;