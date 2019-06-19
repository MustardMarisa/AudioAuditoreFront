import React, { Component } from "react";

class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                {!this.props.auth.isAuthenticated() &&
                    <button className="button" onClick={this.props.auth.login}>Login</button>
                }

                {this.props.auth.isAuthenticated() &&
                    <button className="button" onClick={this.props.auth.logout}>Logout</button>
                }
            </div>
        );
    }
}

export default Login;