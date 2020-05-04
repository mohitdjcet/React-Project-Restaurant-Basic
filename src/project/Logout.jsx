import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavBar1 from './NavBar1'

class Logout extends Component {
    render() {
        localStorage.clear()
        return (
            <div>
                <NavBar1 />
                <Redirect to="./Login" />
            </div>
        );
    }
}

export default Logout;