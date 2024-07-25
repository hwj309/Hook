import Reatc, { useState, useEffect, useCallback } from 'react';

// useMemo 는 메모리에 저장된 결과값을 가져오는 기능이고
// useCallback 는 메모리에 저장된 '함수' 를 가져오는 기능이다.

function CallSomeFunc() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunction = useCallback(() => {
        console.log(`somFunc: number: ${number}`);
        return;
    }, [number]);

    useEffect((() => {  //someFunction이 변경된 경우에만 처리가 된다
        console.log("someFunction이 변경되었습니다.");
    }), [someFunction]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={((e) => setNumber(parseInt(e.target.value)))}
            />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFunction}>Call somFunc</button>
        </div>
    );
}

export default CallSomeFunc;