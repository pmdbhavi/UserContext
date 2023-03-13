import './App.css';
import React from 'react';
import {useState} from 'react'
import FunctionComponent from './FunctionComponent';
import {UserContext} from './UserContext'

const App=()=>{
  const [count,setCount]=useState(0);


  const onClickIncrement=()=>{
    setCount(prevState=>prevState+1)
  }

  const onClickDecrement=()=>{
    setCount(prevState=>prevState-1)
  }

  
  return(
    <div className="App border">
      <h1>App Component</h1>
      <p>{count}</p>
      <div>
        <button type="button" onClick={onClickIncrement}>Increment</button>
        <button type="button" onClick={onClickDecrement}>Decrement</button>
      </div>
      <UserContext.Provider value={{count,setCount}} >
        <FunctionComponent/>
        <hr/>
      </UserContext.Provider>
    </div>
  )
}
export default App;
