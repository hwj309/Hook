import React, { useState, useEffect, useMemo } from 'react';

function Country() {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // const location = isKorea ? '한국' : '외국';
    // const location = {
    //     country: isKorea ? '한국' : '외국',
    // };
    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국',
            // 뭔가 오래걸리는 작업에 useMemo 를 사용하면 효과적으로 컴포넌트를 최적화 할 수 있음
        }
    },[isKorea]);

    useEffect(() => {
        console.log("useEffect 호출");
    }, [location]);
    

    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => {
                    setNumber(parseInt(e.target.value));
                }}
            />
            <hr />
            <h2>어느 나라에 있어요?</h2>
            <p>나라:  {location.country}</p>
            <button onClick={() => {setIsKorea(!isKorea)}}>비행기 타자</button>
        </div>
    );
}

export default Country;