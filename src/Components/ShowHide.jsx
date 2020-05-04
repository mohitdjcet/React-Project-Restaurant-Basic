import React from 'react';

export default class ShowHide extends React.PureComponent {
    state={
        text:true
    }
    HandelClick =() =>{
        this.setState({
            text:!this.state.text
        })
    }
    render() {
        return (
            <div>
                {
                this.state.text ?
                <h1>show and hide</h1>
                :
                null
                }
                <button onClick={this.HandelClick}>Click me</button>
            </div>
        )
    }
}