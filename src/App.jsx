import React, { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
  const [length,setLength]=useState(8);
  const [password,setPassword]=useState("");
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);

  // const passGenerator=useCallback(()=>{
  //   console.log("useCallback rendered");
  //   let pass="";
  //   const letters="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  //   const numbers="1234567890";
  //   const characters="!@#$%^&*()?";
  //   let str=letters;
  //   if(numAllowed) str+=numbers;
  //   if(charAllowed) str+=characters;

  //   for(let i=1;i<=length;i++){
  //       let char=str[Math.floor(Math.random()*str.length)];
  //       pass+=char;
  //   }

  //   setPassword(pass);
    

  // },[length,numAllowed,charAllowed]);

  useEffect(()=>{
    // passGenerator()
    // console.log("useEffect rendered");
let pass="";
    const letters="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    const numbers="1234567890";
    const characters="!@#$%^&*()?";
    let str=letters;
    if(numAllowed) str+=numbers;
    if(charAllowed) str+=characters;

    for(let i=1;i<=length;i++){
        let char=str[Math.floor(Math.random()*str.length)];
        pass+=char;
    }

    setPassword(pass);
  },[length,numAllowed,charAllowed]);

  const passRef=useRef(null);
  const copyHandler=()=>{
      passRef.current?.select();
      window.navigator.clipboard.writeText(password);
  }


  return (
    <div className="bg-gray-400 h-screen w-screen flex flex-col items-center pt-10">
      <h1 className="text-2xl font-bold underline">Password Generator</h1>
      <div className="h-20 bg-blue-500 flex items-center">
        <input className="h-1/2 w-[31vw] p-2 rounded-l-md text-center" readOnly ref={passRef} type="text" value={password} />
        <button className="h-1/2 bg-gray-800 text-white p-2 rounded-r-md hover:bg-gray-700 active:bg-gray-600" onClick={copyHandler}>Copy</button>
      </div>
      <div className="bg-gray-600 h-20 w-[35vw] flex items-center justify-around text-white text-xl">
        <input type="range" min="10" max="30" name="" id="length" value={length} onChange={(e)=>setLength(e.target.value)}/>
        <label htmlFor="length">Length({length})</label>
        <input type="checkbox" defaultChecked={numAllowed} onChange={(prev)=>setNumAllowed(prev=>!prev)} name="" id="number" />
        <label htmlFor="number">Numbers</label>
        <input type="checkbox" defaultChecked={charAllowed} onChange={(prev)=>setCharAllowed(prev=>!prev)} name="" id="characters" />
        <label htmlFor="characters">Characters</label>
      </div>
    </div>
  );
};

export default App;
