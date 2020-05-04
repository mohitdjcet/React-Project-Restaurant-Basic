import React from 'react';

export default class ComponentDidMountComp extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            data: null
        }
        console.log('constructor')
    }
    componentDidMount() {
        this.setState({
            data: 'update'
        })
        console.log('componentDidMount')
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>Life Cycle ComponentDidMount </h1>
            </div>
        )
    }
}