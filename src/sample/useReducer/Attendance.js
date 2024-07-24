import React, { useState, useReducer } from 'react';
import Student from './Student';

const reducer = (state, action) => {
    console.log('adasdsd');
    switch (action.type) {
        
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };
        case 'del-student':
            return {
                count: state.count -1,
                students: state.students.filter(student => student.id !== action.payload.id),    // filter : 말그래도 조건에 맞는 결과를 반환해주는 함수
                isHere: false,
            }
        case 'mark-student':
            return {
                count: state.count,
                students: state.students.map(student => {
                    if(student.id === action.payload.id) {
                        return {...student, isHere: !student.isHere};
                    }
                    return student;
                })
            }
        default: 
            return state;
    }
}

const initialState = {
    count: 0,
    students: []
};

function Attendance() {
    const [name, setName] = useState('');
    const [studentInfo, dispatch] = useReducer(reducer, initialState);  // 학생 정보를 담아줄 state

    return (
        <div>
          <h1>useReduse</h1>
          <h2>출석부</h2>
          <p>총 학생 수: {studentInfo.count}명</p>
          <input 
            type="text"
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => {
            dispatch({type: 'add-student', payload: {name}});
          }}>추가</button>
          {studentInfo.students.map(student => {    // map : 반복문 대신에 사용하는 함수
            return (<Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere}/>);
          })}
        </div>
    );
}

export default Attendance;