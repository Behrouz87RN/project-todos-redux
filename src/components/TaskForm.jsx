import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/tasks';
import './TaskForm.css';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const id = new Date().getTime(); 
      dispatch(addTask({ id, text: newTask, complete: false }));
      setNewTask('');
    }
  };

  return (
    <div className="task-form">
      <h2>New tasks to my list...</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task here..."
      />
      <button onClick={handleAddTask}>Add now</button>
    </div>
  );
};

export default TaskForm;
