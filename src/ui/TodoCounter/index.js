import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      You have completed {completedTodos} of {totalTodos} tasks of your TO DO list mamahuevo
    </h2>
  );
}

export { TodoCounter };
