import React, { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length,setLength] = useState(8);
  const [numbersAllowed,setNumbersAllowed] = useState(false);
  const [charactersAllowed,setCharactersAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str += "0123456789";
    if(charactersAllowed) str += "~!@#$%^&*()_-+={[}]|\:;<,>.?/";

    for(let i = 1;i <= length;i++)
    {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  },[length,numbersAllowed,charactersAllowed,setPassword]);

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() =>{
    passwordGenerator();
  },[length,numbersAllowed,charactersAllowed,passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md bg-slate-700 shadow-md rounded-lg text-orange-500 px-4 my-20 mx-auto py-3'>
        <h1 className='text-3xl text-white text-center my-3'>Password Generator</h1>
        <div className='flex mb-4 shadow rounded-lg overflow-hidden'>
          <input 
            type="text"
            value={password}
            className='w-full outline-none py-2 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 shrink-0 text-white px-3 py-0.5' onClick={copyPassword}>copy</button>
        </div>
        <div className='text-sm flex gap-x-2'>
         <div className='items-center flex gap-x-1'>
          <input
            type='range'
            min={8}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(event) =>{
              setLength(event.target.value);
            }}
          />
          <label>Length: {length}</label>
         </div> 
         <div className='items-center flex gap-x-1'>
          <input
              type='checkbox'
              defaultChecked={numbersAllowed}
              id='numbersInput'
              onChange={() =>{
                setNumbersAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numbersInput'>Numbers</label>
         </div>
         <div className='items-center flex gap-x-1'>
          <input
              type='checkbox'
              defaultChecked={charactersAllowed}
              id='numbersInput'
              onChange={() =>{
                setCharactersAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numbersInput'>Characters</label>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
