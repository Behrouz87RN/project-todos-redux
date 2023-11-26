
import { createSlice } from '@reduxjs/toolkit';
// import { isHtmlElement } from 'react-router-dom/dist/dom';

export const tasks = createSlice({
  name: 'tasks',
  isEmpty: false,
  initialState: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: false },
    { id: 4, text: 'Create a todo app', complete: false },
    { id: 5, text: 'Create projects for tasks → the project is marked as complete.', complete: false},
  ],
  reducers: {
    addTask: (state, action) => {
      const { id, text, complete } = action.payload;
      state.push({ id, text, complete });
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },
    toggleTask: (state, action) => {
      const taskId = action.payload;
      return state.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task
      );
    },
  },
});

export const { addTask, removeTask, toggleTask, countIncompleteTasks } = tasks.actions;
export default tasks.reducer;
