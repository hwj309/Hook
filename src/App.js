import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './sample/useState/Counter';
import Info from './sample/useEffect/Info';
import ContextSample from './sample/useContext/ContextSample';
import Backing from './sample/useReducer/Baking';
import Bank from './sample/useReducer/Bank';
import Attendance from './sample/useReducer/Attendance';
import Calculate from './sample/useMemo/Calculate';
import Country from './sample/useMemo/Country';
import CallSomeFunc from './sample/useCallBack/CallSomeFunc';
import CreateBoxStyle from './sample/useCallBack/CreateBoxStyle';
import CountState from './sample/useRef/CountState';
import Login from './sample/useRef/Login';

function App() {

  const [M1, setM1] = useState(false);
  const [M2, setM2] = useState(false);
  const [M3, setM3] = useState(false);
  const [M4, setM4] = useState(false);
  const [M5, setM5] = useState(false);
  const [M6, setM6] = useState(false);
  const [M7, setM7] = useState(false);
  const [M8, setM8] = useState(false);
  const [M9, setM9] = useState(false);
  const [M10, setM10] = useState(false);
  const [M11, setM11] = useState(false);
  const [M12, setM12] = useState(false);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <hr />
      <h1>useState</h1>
      <h3 onClick={() => {setM1(!M1)}}>Counter</h3>
      { M1 ? <Counter /> : null }
      <hr/>
      <h1>useEffect</h1>
      <h3 onClick={() => {setM2(!M2)}}>Info</h3>
      { M2 ? <Info /> : null }
      <hr/>
      <h1>useContext</h1>
      <h3 onClick={() => {setM3(!M3)}}>ContextSample</h3>
      { M3 ? <ContextSample /> : null }
      <hr/>
      <h1>useReducer</h1>
      <h3 onClick={() => {setM4(!M4)}}>Backing</h3>
      { M4 ? <Backing /> : null }
      <p>==============================</p>
      <h3 onClick={() => {setM5(!M5)}}>Bank</h3>
      { M5 ? <Bank /> : null }
      <p>==============================</p>
      <h3 onClick={() => {setM6(!M6)}}>Attendance</h3>
      { M6 ? <Attendance /> : null }
      <hr />
      <h1>useMemo</h1>
      <h3 onClick={() => {setM7(!M7)}}>Calculate</h3>
      { M7 ? <Calculate /> : null }
      <p>==============================</p>
      <h3 onClick={() => {setM8(!M8)}}>Country</h3>
      { M8 ? <Country /> : null }
      <hr/>
      <h1>useCallback</h1>
      <h3 onClick={() => {setM9(!M9)}}>CallSomeFunc</h3>
      { M9 ? <CallSomeFunc /> : null }
      <p>==============================</p>
      <h3 onClick={() => {setM10(!M10)}}>CreateBoxStyle</h3>
      { M10 ? <CreateBoxStyle /> : null }
      <hr />
      <h1>useRef</h1>
      <h3 onClick={() => {setM11(!M11)}}>CountState</h3>
      { M11 ? <CountState /> : null }
      <p>==============================</p>
      <h3 onClick={() => {setM12(!M12)}}>Login</h3>
      { M12 ? <Login /> : null }
    </div>
  );
}

export default App;
