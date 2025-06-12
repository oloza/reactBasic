import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(10);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Counter;