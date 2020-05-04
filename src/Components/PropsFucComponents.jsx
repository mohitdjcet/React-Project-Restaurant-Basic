import React from 'react'

export default function PropsFucComponents(props) {
    let {data,text}= props
    return (
        <div>
            <h1>{data}</h1>
            <h1>{text.name}</h1>
        </div>
    )
}