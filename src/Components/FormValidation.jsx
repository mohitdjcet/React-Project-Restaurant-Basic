import React from 'react';

export default class FormValidation extends React.PureComponent {
    state = {
        name: '',
        password: '',
        nameError: '',
        passError: ''
    }
    HandelName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    HandelPass = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    valid() {
        if (!this.state.name.includes('@') && this.state.password.length < 5) {
            this.setState({
                nameError: 'Invalid Name',
                passError: 'Password lenght should be more then 5'
            })
        }
        else if (!this.state.name.includes('@')) {
            this.setState({
                nameError: 'Invalid Name'
            })
        }
        else if (this.state.password.length < 5) {
            this.setState({
                passError: 'Password lenght should be more then 5'
            })
        }
        else {
            return true
        }
    }
    Submit = () => {
        this.setState({
            nameError:'',
            passError:''
        })
        if (this.valid()) {
            alert('Form submit sucessfully')
        }
    }
    render() {
        return (
            <div>
                <h1>Form Validation</h1>
                <input type='text' onChange={this.HandelName} />
                <p style={{ color: 'red', fontSize: '14px' }}>{this.state.nameError}</p>
                <input type='password' onChange={this.HandelPass} />
                <p style={{ color: 'red', fontSize: '14px' }}>{this.state.passError}</p>
                <button onClick={this.Submit}>Submit</button>
            </div>
        )
    }
}