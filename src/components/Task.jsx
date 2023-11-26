import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../reducers/tasks'; 
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IconContext } from "react-icons";
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

        <button onClick={handleToggleComplete} className='task-btn'>
          {task.complete ? (
          <IconContext.Provider value={{className: 'task-status-done-Icon'}}>
            <IoIosCheckmarkCircle />
          </IconContext.Provider>
          ) : (
          <IconContext.Provider value={{className: 'task-status-ongoing-Icon'}}>
            <IoIosCheckmarkCircleOutline />
          </IconContext.Provider>)}
        </button>
        <button className="delete" onClick={handleRemoveTask}>
        <IconContext.Provider value={{className: 'task-status-bin-Icon'}}>
          <RiDeleteBin6Line/>
        </IconContext.Provider>
        </button>
    </div>
  );
};

export default Task;
