import React, { createContext, useContext, useState } from 'react';
import './ContextSample.css';

// 부모 컴포넌트에서 자식 컴포넌트로 props를 넘기는 과정에서 props drilling에 빠지지 않는다. 또한, 함수형 컴포넌트에서 Context를 보다 쉽게 사용할 수 있다.

const ThemeContext = createContext('black');

const ContextSample = () => {

    const [rgbValue,setRgbValue] = useState('');

    // history
    const [hs, setHs] = useState('');   // 이전 색으로 되돌릭 위한 히스토리

    const theme = useContext(ThemeContext);
    const style = {
        width: '24px',
        height: '24px',
        //background: theme     // Context를 이용한 예제의 경우 사용
        background: rgbValue    // 내가 작성한 코드 : 버튼 클릭시 랜덤한 색으로 변경
    };
    const block_style = {
        display: 'inline_block'
    };

    const getRandom = (min,max) => {
        return Math.random() * (max - min) + min;
    }

    const changeColor = () => {
        setHs(rgbValue);
        let red = getRandom(0,255);
        let green = getRandom(0,255);
        let blue = getRandom(0,255);
        let rgb = 'rgb('+red+','+green+','+blue+')';
        setRgbValue(rgb);
    }

    const rollBack = () => {
        setRgbValue(hs);
    }

    return (
        <div className="infoClass" style={style}>
            <h4>Color Change</h4>
            <div className="colorBox" style={style}/>
            <button onClick={changeColor}>Change Color</button>
            <button onClick={rollBack}>Roll Back Color</button>
        </div>
        
    );
}

export default ContextSample;