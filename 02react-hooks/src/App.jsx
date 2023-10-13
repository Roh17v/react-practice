import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //let counter = 15;

  let [counter,setCounter] = useState(15);
  const addValue = () =>{
    if(counter < 20) 
    counter = counter + 1;
    setCounter(counter);
    console.log('Clicked',counter);
  };

  const removeValue = () =>{
    if(counter > 0)
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Hello World!</h1>
      <h3>counter value: {counter}</h3>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
