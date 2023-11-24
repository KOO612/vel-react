import React, { useRef, useState } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    // e.target에서 value와 name 추출
    setInputs({
      ...inputs,
      [name]: value,
      // name 키를 가진 값을 value로 설정
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input placeholder="이름" name="name" onChange={onChange} value={name} ref={nameInput} />
      <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
