import React from 'react';
import ChildComponent from './ChildComponent'

export default class ParentComponents extends React.PureComponent {
    state = {
        unit: 'kg'
    }
    changeUnit = (item) => {
        this.setState({
            unit: item
        })
    }
    greetHandler = (as) => {
        alert(`this is the ${as}`)
    }
    render() {
        return (
            <div>
                <h1>ParentComponents</h1>
                <ChildComponent data={{ unit: this.state.unit, changeUnit1: this.changeUnit, greetHandler: this.greetHandler }} />
            </div>
        )
    }
}