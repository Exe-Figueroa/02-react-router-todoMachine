import React from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultText ||'');
  const navigate = useNavigate();

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    // setOpenModal(false);
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label} </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="New task"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {props.submitBtn }
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
