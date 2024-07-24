// 1. useReducer()는 useState()와 같은 상태 관리, 상태 업데이트 훅(Hook) 이다.
// 2. 변경할 값이 많을 때(상태 업데이트) 즉 상태 관리할 데이터가 많아질 때 사용을 고민해 볼 필요가 있다.
// 3. 좀더 구조화된 방식으로 상태를 간리하고 싶을 때 사용할 수 있다.
// 4. 선언형태 : const [state,dispatch] = useReducer(reducer, initialState);
//      - state : 상태 이름(컴포넌트에서 사용할 상태)
//      - dispatch : 상태(state)를 변경 시 필요한 정보를 전달하는 '함수'
//      - reducer : dispatch를 확인해서 state를 변경해 주는 '함수'
//      - initialState : state에 전달할 초기 값

// 리엑트의 useReducer는 상태 관리와 상태 업데이트를 다루는 훅(Hook) 중 하나.
// 주로 복잡한 상태 관리 로직을 다루거나 여러 컴포넌트 간에 상태를 고유할 때 사용

import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'PLUS' : return state + 1;
        case 'MINUS' : return state - 1;
        default: return state;
    }
}

function Backing() {
    // 3을 value 저장
    // 위에 선언했던 값을 변경하는 reducer 함수를 넣어주기
    // reducer속 로직들을 실행시킬 명령어가 담겨있는 dispatch 선언
    const [value, dispatch] = useReducer(reducer, 3);

    const onPlus = () => {
        dispatch({ type: 'PLUS' });
    }

    const onMinus = () => {
        dispatch({type: 'MINUS'});
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onPlus}>+1</button>
            <button onClick={onMinus}>-1</button>
        </div>
    );
}

export default Backing;