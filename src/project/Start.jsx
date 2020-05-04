import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ResturantList from './ResturantList'
import ResturantCreate from './ResturantCreate'
import ResturantSearch from './ResturantSearch'
import ResturantUpdate from './ResturantUpdate'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Protect from './Protect'

export default class Start extends React.PureComponent {
    render() {
        return (
            <div className='App'>
                <Router>
                    {/* <NavBar1 /> */}
                    {/* <Route path="/list">
                        <ResturantList />
                    </Route> */}
                    <Protect exact path="/list" component={ResturantList}/>

                    {/* <Route path="/Create">
                        <ResturantCreate />
                    </Route> */}
                    <Protect exact path="/Create" component={ResturantCreate}/>

                    {/* <Route path="/Search">
                        <ResturantSearch />
                    </Route> */}
                    <Protect exact path="/Search" component={ResturantSearch}/>

                    {/* <Route path="/logout">
                        <Logout />
                    </Route> */}
                    <Protect exact path="/logout" component={Logout}/>

                    {/* <Route path="/update/:id"
                        render={props => (
                            <ResturantUpdate {...props} />
                        )}>
                    </Route> */}
                    <Protect exact path="/update/:id" component={ResturantUpdate}/>

                    <Route path="/Login"
                        render={props => (
                            <Login {...props} />
                        )}>
                    </Route>
                    {/* <Route exact path="/">
                        <Home />
                    </Route> */}

                    <Protect exact path="/" component={Home}/>
                </Router>
            </div>
        );
    }
}