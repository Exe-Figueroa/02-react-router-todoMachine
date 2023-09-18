import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { TodoForm } from '../../ui/TodoForm/index.js'
import { useTodos } from '../useTodos.js';

export function EditTodoPage(props) {
  const location = useLocation();
  const { editTodo } = useTodos().stateUpdaters;
  const { getTodo, loading } = useTodos().state;
  const { id } = useParams();
  const numberId = Number(id);
  
  let todoText;
  
  if (location.state?.todo) {
    todoText = location.state.todo.text;
  }else if (loading) {
    return <h1>Loading...</h1>
  }else{
    const todo = getTodo(numberId);
    todoText = todo.text;
  }
  return (
    <TodoForm
    defaultText={todoText}
    label='Upgrade TODO'
    submitBtn='Update'
    submitEvent={(newText) => editTodo(numberId, newText)}
    />
  );
}