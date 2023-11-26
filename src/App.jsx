import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasks';
import { Header } from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Footer } from './components/Footer';
import './App.css'; 

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header/>
        <TaskForm />
        <TaskList />
        <Footer/>
      </div>
    </Provider>
  );
};
