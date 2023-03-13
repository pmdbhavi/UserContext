import {useContext} from 'react'
import {UserContext} from './UserContext'
import FunctionChildComponent from './FunctionChildComponent.js'
import './App.css'

const FunctionComponent=()=>{

    const {count,setCount}=useContext(UserContext);

    const onClickIncrement=()=>(
        setCount(prevState=>prevState+1)
    )
    return(
        <div className="border">
            <h1>Function Component</h1>
            <p>{count}</p>
            <button type="button" onClick={onClickIncrement}>Increment</button>
            <div>
                <FunctionChildComponent/>
            </div>
        </div>
    )
}

export default FunctionComponent