import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

import Grid from '@mui/material/Grid';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    return (
        <Grid container spacing={4} sx={{justifyContent: 'center', mt: '20px'}} >
                {todos.map(todo => 
                    <TodoItem 
                        {...todo} 
                        key={todo.id}
                    />
                )}
        </Grid>
      );
}
 
export default TodoList;