

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        onClick={() => toggleComplete(todo._id, todo.completed)}
        style={{ cursor: 'pointer', flex: 1 }}
      >
        {todo.text}
      </span>

      <div className="todo-actions">
        <button onClick={() => toggleComplete(todo._id, todo.completed)}>
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
