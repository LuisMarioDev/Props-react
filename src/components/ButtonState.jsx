import {useState} from 'react'

const ButtonState = () => {
  //let counter = 0

  const [counter, setCounter] = useState(0)

  //const stateNumber = arrayState[0]
  //const stateFunction = arrayState[1]

  const handleCLick = () => {
    //counter = counter + 1;
    //console.log('handleClick ' + counter)
    setCounter(counter + 1);
  };

  return <button onClick={handleCLick}>buttonstate: {counter}</button>;
};

export default ButtonState;
