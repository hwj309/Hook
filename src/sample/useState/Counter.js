import React, { useState } from 'react';

// useState : 가장 기본적인 훅이며, 컴포넌트 안에서 상태 관리를 해야하는 일이 발생한다면 이 hook을 사용한다.
const Counter = () => {
    const [value, setValue] = useState(0);
  
    return (
      <div>
        <h4>Counter</h4>
        <p>
          현재 카운터 값은 {value}입니다.
        </p>
        <button onClick={() => setValue(value+1)}>+1</button>
        <button onClick={() => setValue(value-1)}>-1</button>
      </div>
    );
  }

  export default Counter;