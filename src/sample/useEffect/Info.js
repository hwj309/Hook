import React, { useState, useEffect } from 'react';


// useEffect : 리액트 컴포넌트가 리렌더링 될 때마다 특정한 작업을 수행하도록 설정할 수 있게 하는 hook이다.
const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    console.log("render success!");
    console.log({
      name,
      nickName
    });
  });

  const onChangeName = (event) => {
    //setName(event.target.value);
    setName(document.getElementById("name_id").value);
  };

  const onCahngeNickName = (event) => {
    //setNickName(event.target.value);
    setNickName(document.getElementById('nick_name_id').value);
  }

  return (
    <div>
        <h4>Change Name & NickName</h4>
        <div>
          <p>Name : {name}</p>
          <input type="text" id="name_id"/>
          <button onClick={onChangeName}>Change NickName</button>
          <p>NickName : {nickName}</p>
          <input id="nick_name_id"/>
          <button onClick={onCahngeNickName}>Change NickName</button>
        </div>
    </div>
  );

}



export default Info;