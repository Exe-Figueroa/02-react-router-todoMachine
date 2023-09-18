import React from 'react';
import { useTodos } from '../useTodos.js';
import { TodoForm } from '../../ui/TodoForm/index.js'

export function NewTodoPage(props) {
  const {addTodo} = useTodos().stateUpdaters;

  return (
    <TodoForm 
    label='Create a new TODO'
    submitBtn='Add'
    submitEvent={(txt)=>addTodo(txt)}
    />
  );
}

