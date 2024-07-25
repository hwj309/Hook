import React, { useRef, useEffect } from "react";

// useRef 를 활용해서 DOM요소에 접근하는 예제
// 이 페이지가 실행될때 input box에 focus가 맞춰지는 기능 예제

const Login = () => {
    const inputRef = useRef();

    useEffect(() => {
        //console.log(inputRef);
        inputRef.current.focus();
    },[]);

    const login = () => {
        alert(`환영합니다. ${inputRef.current.value}!`);
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>로그인</button>
        </div>
    );
}

export default Login;