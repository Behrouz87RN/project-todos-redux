import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../reducers/tasks'; 
import './Task.css'; 

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleTask(task.id)); 
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div className={`task ${task.complete ? 'complete' : 'incomplete'}`}>
      <span>{task.text}</span>
      <button onClick={handleToggleComplete}>
        {task.complete ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleRemoveTask}>Remove</button>
    </div>
  );
};

export default Task;
