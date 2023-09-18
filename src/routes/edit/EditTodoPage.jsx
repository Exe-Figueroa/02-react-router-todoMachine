import React from 'react';
import { TodoForm } from '../../ui/TodoForm/index.js'

export function EditTodoPage(props) {

  return (
    <TodoForm 
    label='Upgrade TODO'
    submitBtn='Update'
    submitEvent={()=>console.log('Update')}
    />
  );
}