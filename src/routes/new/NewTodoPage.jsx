import React from 'react';
import { TodoForm } from '../../ui/TodoForm/index.js'

export function NewTodoPage(props) {

  return (
    <TodoForm 
    label='Create a new TODO'
    submitBtn='Add'
    submitEvent={()=>console.log('sendTodo')}
    />
  );
}

