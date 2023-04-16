import React from 'react';
import Todo from './Todo';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';




function TodoList(props){
    if(props.todos.length)//<--if list empty wont render paper
    return (
        <Paper>
            {props.todos.map((todo,i)=>(
                <List>
                     <React.Fragment key={todo.id}>
                    <Todo 
                    task={todo.task} 
                    id={todo.id} 
                    // key={todo.id}
                    completed={todo.completed}
                    removeTodo={props.removeTodo}
                    toggleTodo={props.toggleTodo}
                    editTodo={props.editTodo}
                    />
                    {i < props.todos.length -1 && <Divider/>}
                
                    </React.Fragment>
                </List>
))}
        </Paper>
    );
    return null;//<--if list empty it needs to return something so we return null.
}


export default TodoList;