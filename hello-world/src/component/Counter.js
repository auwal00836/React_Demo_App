import { useState } from "react"

 const Counter = () => {
    
    const [count,setCount] = useState()
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={ () => setCount(count+1)}>Click me</button>
        </div>
    )
}

export default Counter