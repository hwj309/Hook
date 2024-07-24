// 여러개의 하위값을 포함하는 복잡한 state 를 다룰때 사용
// 알아둬야 할 3가지
// Reducer, Dispatch, Action
// Reducer: state를 업데이터하는 역할 을 함
// Dispatch: 요구하는 행위
// Action: 요구에 대한 내용

import React, { useState, useReducer } from 'react';

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {  // 여러곳에서 하나씩 입력할 필요 없이 하나로 관리 가능
    deposit: 'deposit',
    withdraw: 'withdraw',
};

const reducer = (state, action) => {
    console.log("reducer가 일을 합니다.", state, action);
    //..
    switch (action.type) {
        case ACTION_TYPES.deposit: return state + action.payload;
        case ACTION_TYPES.withdraw : return state - action.payload;
        default : return state;
    }
}

function Bank() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  
  return (
    <div>
      <h1>useReduse</h1>
      <h2>useReducer 은행에 오신것을 환영합니다</h2>
      <p>잔고: {money}원</p>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.deposit, payload: number})
      }}>예금</button>
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.withdraw, payload: number})
      }}>출금</button>
    </div>
  );
}

export default Bank;