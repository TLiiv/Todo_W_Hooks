import React from 'react';
import Todo from './Todo';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';




function TodoList(props){
    
    return (
        <Paper>
            {props.todos.map((todo,i)=>(
                <List>
                    <>
                    <Todo 
                    key={todo.id}
                    task={todo.task} 
                    id={todo.id} 
                    completed={todo.completed}
                    removeTodo={props.removeTodo}
                    toggleTodo={props.toggleTodo}
                    editTodo={props.editTodo}
                    />
                    {i < props.todos.length -1 && <Divider/>}
                
                    </>
                </List>
))}
        </Paper>
    )
}


export default TodoList;