import React, { useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';


import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

function TodoApp () {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
    const {todos,addTodo,removeTodo,toggleTodo,editTodo} = useTodoState(initialTodos);
    
    // const initialTodos = [
    //     {id:1, task: 'Walk the fish', completed:false },
    //     {id:2, task: 'Clean Fishtank', completed:true },
    //     {id:3, task: 'Breathe Air', completed:false }
    // ]
    

    useEffect(()=>{
        window.localStorage.setItem('todos',JSON.stringify(todos))
    },[todos]);
    
   
    return (
        <Paper style={{
            padding:0,
            margin:0,
            height:'100vh',
            backgroundColor:'#fafafa'
        }}
        elevation={0}
        >
            <AppBar color="primary" position='static' style={{height:"64px"}}>
                <Toolbar>
                    <Typography color='inherit'>Todos With HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{marginTop:"1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo}/>
            <TodoList 
            todos={todos} 
            removeTodo={removeTodo} 
            toggleTodo={toggleTodo} 
            editTodo={editTodo}/>
            </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;