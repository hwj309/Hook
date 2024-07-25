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
      <h1 onClick={() => {setM1(!M1)}}>Counter</h1>
      { M1 ? <Counter /> : null }
      <hr/>
      <h1 onClick={() => {setM2(!M2)}}>Info</h1>
      { M2 ? <Info /> : null }
      <hr/>
      <h1 onClick={() => {setM3(!M3)}}>ContextSample</h1>
      { M3 ? <ContextSample /> : null }
      <hr/>
      <h1 onClick={() => {setM4(!M4)}}>Backing</h1>
      { M4 ? <Backing /> : null }
      <hr/>
      <h1 onClick={() => {setM5(!M5)}}>Bank</h1>
      { M5 ? <Bank /> : null }
      <hr/>
      <h1 onClick={() => {setM6(!M6)}}>Attendance</h1>
      { M6 ? <Attendance /> : null }
      <hr />
      <h1 onClick={() => {setM7(!M7)}}>Calculate</h1>
      { M7 ? <Calculate /> : null }
      <hr/>
      <h1 onClick={() => {setM8(!M8)}}>Country</h1>
      { M8 ? <Country /> : null }
      <hr/>
      <h1 onClick={() => {setM9(!M9)}}>CallSomeFunc</h1>
      { M9 ? <CallSomeFunc /> : null }
      <hr />
      <h1 onClick={() => {setM10(!M10)}}>CreateBoxStyle</h1>
      { M10 ? <CreateBoxStyle /> : null }
      <hr />
      <h1 onClick={() => {setM11(!M11)}}>CountState</h1>
      { M11 ? <CountState /> : null }
    </div>
  );
}

export default App;
