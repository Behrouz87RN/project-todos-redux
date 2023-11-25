
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasks';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; 

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>Redux Todo App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};
