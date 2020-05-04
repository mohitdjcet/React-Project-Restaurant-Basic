import React from 'react'

export default class ClassComponent extends React.PureComponent {
    componentDidMount() {
        console.log("life cycle")
    }
    render() {
        return (
            <div>
                <h1>xyz{1+1}</h1>
            </div>
        )
    }
}