import React, {useState, useRef} from 'react'

function InputSample() {

  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const nameInput = useRef();

  const {name, nickname} = inputs;

  const handler = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onReset = (e) => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  }

  return (
    <div>
      <input ref={nameInput} placeholder="이름" name="name" value={name} onChange={handler} />
      <input placeholder="닉네임" name="nickname" value={nickname} onChange={handler} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
