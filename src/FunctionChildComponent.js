import {useContext} from 'react'
import {UserContext} from './UserContext'
import './App.css'

const FunctionChildComponent=()=>{

    const {count,setCount}=useContext(UserContext);

    const  onClickDecrement=()=>(
        setCount(prevState=>prevState-1)
    )
    return(
        <div className="border">
            <h1>Function Child Component</h1>
            <p>{count}</p>
            <button type="button" onClick={onClickDecrement}>Decrement</button>
        </div>
    )
}

export default FunctionChildComponent