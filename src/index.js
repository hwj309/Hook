import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import Counter from './sample/useState/Counter';
 import Info from './sample/useEffect/Info';
 import ContextSample from './sample/useContext/ContextSample';
 import Backing from './sample/useReducer/Baking';
import Bank from './sample/useReducer/Bank';
import Attendance from './sample/useReducer/Attendance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* 
    <Counter />
    <p>=========================================================================</p>
    <Info />
    <p>=========================================================================</p>
    <ContextSample />
    <p>=========================================================================</p>
    <Backing />
    <p>=========================================================================</p>
     */}
    <Bank />
    <p>=========================================================================</p>
    <Attendance />
    
  </React.StrictMode>
);
//root.render(<Counter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
