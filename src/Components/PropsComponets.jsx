import React from 'react'

export default class PropsComponets extends React.PureComponent {
    render() {
        let {data,text}= this.props
        return (
            <div>
                <h1>{data}</h1>
                <h1>{text.name}</h1>
            </div>
        )
    }
}