import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';



function EditTodo(props){
    const [value,handleChange,reset] = useInputState(props.task)
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.editTodo(props.id,value);
            reset();
            props.toggleEditForm();
        }} style={{marginLeft:'2rem', width:'85%'}}>
        <TextField
        variant="standard"
            value={value} 
            onChange={handleChange} 
            label="Edit Todo" 
            margin='normal' 
            fullWidth
            autoFocus //if edit is pushed you can instantly type on input, without you need to click
        />
        </form>
    )
}

export default EditTodo;