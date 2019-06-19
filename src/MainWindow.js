import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
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
                {/*<NavBar />
                <div className="container">
                    <Register />
                </div>
                */}
                <HashRouter>
                    <div>
                        
                        <ul className="header">
                            <li><NavLink exact to="/">Login</NavLink></li>
                            <li><NavLink to="/stuff">Stuff</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {/*<li><NavLink to="/loginError">Error</NavLink></li>*/}
                            {/*<li><NavLink to="/callback">Callback</NavLink></li>*/}
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
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default MainWindow;