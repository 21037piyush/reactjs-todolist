import PropTypes from 'prop-types';

export default function TodoInput(props) {
  const { todoValue, setTodoValue, handleAddTodos } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={() => {
        handleAddTodos(todoValue);
        setTodoValue('');
      }}>
        Add
      </button>
    </header>
  );
}

// Add PropTypes to ensure props are passed correctly
TodoInput.propTypes = {
  todoValue: PropTypes.string.isRequired,
  setTodoValue: PropTypes.func.isRequired,
  handleAddTodos: PropTypes.func.isRequired,
};
