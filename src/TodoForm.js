import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from './hooks/useInputState';


function TodoForm(props){
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper style={{margin:'1rem 0', padding:'0 1rem'}}>
            <form onSubmit={e=>{
                e.preventDefault();
                props.addTodo(value);
                reset();
            }}>
            <TextField 
            variant="standard"
            value={value} 
            onChange={handleChange} 
            label="Add New Todo" 
            margin='normal' 
            fullWidth/>
            </form>
        </Paper>
    )
}

export default TodoForm;