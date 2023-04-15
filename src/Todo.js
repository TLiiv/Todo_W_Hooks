import React, { useState, useEffect } from 'react';
import useToggle from './hooks/useToggleState';
import EditTodo from './EditTodo';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';


function Todo (props) {
    const [isEditing, toggle] = useToggle(false); //actually no need to fill paranthesis, it is defaulted to false
    return (
        <ListItem style={{height:'64px'}} >
            {isEditing ? <EditTodo 
            editTodo={props.editTodo} 
            id={props.id} 
            key={props.id} 
            task={props.task}
            toggleEditForm={toggle}
            />:
            <>
        <ListItemText style={{textDecoration: props.completed ? "line-through" : "none"}}>
            <Checkbox onClick={()=>props.toggleTodo(props.id)} tabIndex={-1} checked={props.completed}/>
            {props.task}
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label='Edit' onClick={toggle}>
                <EditIcon/>
            </IconButton>
            <IconButton aria-label='Delete' onClick={()=>props.removeTodo(props.id)}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
        </>
        }
    </ListItem>
    );
}

export default Todo;