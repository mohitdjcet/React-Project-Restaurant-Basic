import React from 'react';

export default class RefComponent extends React.PureComponent {
    state = {
        name: ''
    }
    input_Ref = React.createRef()
    componentDidMount() {
        console.log(this.input_Ref);
        this.input_Ref.current.focus()
    }
    HandelClick = () => {
        alert(this.input_Ref.current.value)
        this.setState({
            name: this.input_Ref.current.value
        })
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.input_Ref} />
                <button onClick={this.HandelClick}>Click</button>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}