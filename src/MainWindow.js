import React, { Component } from "react";

import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

//importamos el componente, deben comenzar con mayusculas
import NavBar from "./components/NavBar";
import Register from "./components/Register"

import Login from "./components/Login";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import LoginError from "./components/LoginError";
import Callback from "./components/Callback";

class MainWindow extends Component {

    componentDidMount(){
        this.props.auth.handleAuthentication();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        
                        <ul className="header">
                            <li><Link exact to="/">Login</Link></li>
                            <li><Link to="/stuff">Stuff</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>

                        <h1>Bienvenido, {this.props.name}</h1>
                        
                        <div className="content">
                            <Route exact path="/" render={(routeProps)=>(
                                <Login {...routeProps} {...this.props} />
                            )} />
                            <Route path="/stuff" render={(routeProps)=>(
                                this.props.auth.isAuthenticated() ? <Stuff {...routeProps} {...this.props} /> : <LoginError {...routeProps} {...this.props} />
                            )} />
                            <Route path="/contact" render={(routeProps)=>(
                                this.props.auth.isAuthenticated() ? <Contact {...routeProps} {...this.props} /> : <LoginError {...routeProps} {...this.props} />
                            )} />
                            {/*<Route path="/loginError" component={LoginError} />*/}
                            {/*<Route path="/callback" component={Callback} />*/}
                        </div>

                        <div className="content">
                            <Route exact path="/" render={(routeProps)=>(
                                <Login {...routeProps} {...this.props} />
                            )} />
                            <Route path="/stuff" render={(routeProps)=>(
                                this.props.auth.isAuthenticated() ? <Stuff {...routeProps} {...this.props} /> : <LoginError {...routeProps} {...this.props} />
                            )} />
                            <Route path="/contact" render={(routeProps)=>(
                                this.props.auth.isAuthenticated() ? <Contact {...routeProps} {...this.props} /> : <LoginError {...routeProps} {...this.props} />
                            )} />
                            {/*<Route path="/loginError" component={LoginError} />*/}
                            {/*<Route path="/callback" component={Callback} />*/}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default MainWindow;