import React from 'react'

export default function FuntionComponents() {
   
    let red = () => {
        alert('Click ho gya')
    }
    return (
        <div>
            <h1 onClick={red}>abc</h1>
        </div>
    )
}