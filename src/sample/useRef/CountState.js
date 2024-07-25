import React, { useState, useRef, useEffect } from "react";

// ※ Ref는 아무리 수정해도 렌더링이 되지 않기 때문에 화면에 실시간으로 업데이트 되지 않음
// ※ 변화는 감지해야하지만 그 변화가 렌디링을 발생시키면 안되는 어떤 값을 다룰때 정말 편리함

function CountState() {
    // ===== [ 1. State와 Ref의 차이응 알아보는 예제 ] =====

    // const [count,setCount] = useState(0);
    // const countRef = useRef(0); 

    // console.log('렌더링...');

    // const increaseCountState = () => {
    //     setCount(count + 1);
    // };

    // const increaseCountRef = () => {
    //     countRef.current = countRef.current + 1;
    //     console.log('Ref: ', countRef.current);
    // }

    // return (
    //     <div>
    //         <p>State: {count}</p>
    //         <p>Ref: {countRef.current}</p>
    //         <button onClick={increaseCountState}>State 올려</button>
    //         <button onClick={increaseCountRef}>Ref 올려</button>
    //     </div>
    // );

    // ===================================================

    // ===== [ 2. 컴포넌트 내부의 변수와 Ref의 차이응 알아보는 예제 ] =====
    // ※ 렌더링 진행시 CountState()을 다시 호출함으로서 내부의 변수가 다시 초기화 된다.
    // ※ 이로인해 변수의 값을 올리고 렌더링을 진행하면 해당 변수는 초기값으로 설정된다.
    // ※ 하지만 Ref는 렌더링이 되더라도 초기값으로 돌아가지 않는다.

    // const [renderer, setRenderer] = useState(0);
    // const countRef = useRef(0); 
    // let countVar = 0;

    // const doRendering = () => {
    //     setRenderer(renderer + 1);
    // }

    // const increaseRef = () => {
    //     countRef.current = countRef.current + 1;
    //     console.log('Ref: ', countRef.current);
    // }

    // const increaseVar = () => {
    //     countVar = countVar + 1;
    //     console.log('Var: ', countVar);
    // }

    // const printResult = () => {
    //     console.log(`Ref: , ${countRef.current}, Var: , ${countVar}`);
    // }

    // return (
    //     <div>
    //         <p>Ref: {countRef.current}</p>
    //         <p>Var: {countVar}</p>
    //         <button onClick={doRendering}>렌더링 진행</button>
    //         <button onClick={increaseRef}>Ref 올려</button>
    //         <button onClick={increaseVar}>변수 올려</button>
    //         <button onClick={printResult}>Ref Var 값 출력</button>
    //     </div>
    // );

    // ===================================================

    // ===== [3. Ref가 유용한 상황] =====
    // ※ 몇번 렌더링 되었는지 확인하고싶음

    const [count,setCount] = useState(1);
    //const [renderCount, setRenderCount] = useState(1);
    const renderCount = useRef(1);

    
    useEffect(() => {
        // ※ 이거 쓰면 무한루프 걸림
        // console.log("렌더링!!");
        // setRenderCount(renderCount + 1);

        renderCount.current = renderCount.current + 1;
        console.log('렌더링 수: ', renderCount.current);
    })

    return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => {setCount(count + 1)}}>올려</button>
            </div>
        );

    // ===================================================
}

export default CountState;