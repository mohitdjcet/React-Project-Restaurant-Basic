import React from 'react';
import UserUnmount from './UserUnmount'

export default class ComponentWillUnmount extends React.PureComponent {
    state = {
        toggle: true
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>ComponentWillUnmount</h1>
                {
                    this.state.toggle ?
                        <UserUnmount />
                        :
                        null
                }
                <button onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>Deleted</button>
            </div>
        )
    }
}