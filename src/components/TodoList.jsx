import PropTypes from 'prop-types';
import TodoCard from './TodoCards'

export default function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo } = props;

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => (
        <TodoCard 
          key={todoIndex} 
          index={todoIndex} 
          handleDeleteTodo={handleDeleteTodo} 
          handleEditTodo={handleEditTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

// Add PropTypes to ensure props are passed correctly
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
};
