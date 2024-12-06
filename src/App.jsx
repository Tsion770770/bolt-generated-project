import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [inputValue, setInputValue] = useState('');

      const addTodo = () => {
        if (inputValue.trim()) {
          setTodos([...todos, { text: inputValue, completed: false }]);
          setInputValue('');
        }
      };

      const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
      };

      const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };

      return (
        <div>
          <h1>Todo List</h1>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
          />
          <button onClick={addTodo}>Add</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                <button onClick={() => removeTodo(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
