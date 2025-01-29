import React, { useState } from 'react';

const TodoList = () => {
  // Состояние для списка задач
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Функция для добавления задачи
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  // Функция для удаления задачи
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={addTask}>Добавить задачу</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
