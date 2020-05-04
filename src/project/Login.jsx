import React, { Component } from 'react';
import NavBar1 from './NavBar1'

class Login extends Component {
    state = {
        name: '',
        password: ''
    }
    login = () => {
        fetch('http://localhost:8000/login?q=' + this.state.name).then((resp) => {
            resp.json().then((data) => {
                // console.log('Result',data)
                if (data.length > 0) {
                    localStorage.setItem("login",JSON.stringify(data))
                    console.log(this.props.history.push("/list"))
                }
                else {
                    alert('Please enter the correct userName and Password')
                }
            })
        })
    }
    render() {
        return (
            <div>
                <NavBar1 />
                <input placeholder="Enter UserName" type='text' name='user' onChange={(e) => this.setState({
                    name: e.target.value
                })} /><br /><br />
                <input placeholder="Enter Password" type='password' name='password' onChange={(e) => this.setState({
                    password: e.target.value
                })} /><br /><br />
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;