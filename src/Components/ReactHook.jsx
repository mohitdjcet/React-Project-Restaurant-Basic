import React, { useState, useEffect } from 'react';
import ReactHookChild from './ReactHookChild'

const ReactHook = () => {
    const [count, setCount] = useState(0)
    // const [data,setData]= useState(0)
    // useEffect(()=>{
    //     document.title=`you click ${count} time`
    // },[count])
    return (
        <div>
            <h1>React Hook {count}</h1>
            <ReactHookChild count={count} />
            <button onClick={() => { setCount(count + 1) }}>Click Me</button>
        </div>
    )
}
export default ReactHook;