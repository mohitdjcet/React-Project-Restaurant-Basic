import React, {useEffect} from 'react'

const ReactHookChild=(props)=>{
    useEffect(()=>{
        console.log("useEffect for child", props.count)
    },[props.count])
    return(
        <div>
        <h1>React Hook Child{props.count}</h1>
        </div>
    )
}
export default ReactHookChild;