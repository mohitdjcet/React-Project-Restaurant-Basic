import React from 'react';

export default class ComponentDidUpdateComp extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null,
            who: null
        }
        console.log('constructor')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
        if (this.state.data == null) {
            this.setState({
                data: 'update'
            })
        }
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>Life Cycle componentDidUpdate {this.state.who}</h1>
                <button onClick={() => { this.setState({ data: 'yes' }) }}>Click Me</button>
            </div>
        )
    }
}