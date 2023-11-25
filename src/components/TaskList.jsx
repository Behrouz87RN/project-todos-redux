import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const taskList = useSelector((state) => state.tasks);

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
