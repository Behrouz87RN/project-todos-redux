import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { TaskCounter } from './TaskCounter';
import './TaskList.css'

const TaskList = () => {
  const taskList = useSelector((state) => state.tasks);

  return (
    <main className="task-list-container">
      <div className='task-list-title'>
        <h2>Let's plan what needs to be done:</h2>
        <TaskCounter/>
      </div>
      <div className='task-list-cards-container'>
        {taskList.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
};

export default TaskList;
