import React, { Component } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../functions/config";
import hash from "../functions/hash";
class Login extends Component {

    constructor() {
        super();
        this.state = {
            token: null,
            item: {
                album: {
                    images: [{ url: "" }]
                },
                name: "",
                artists: [{ name: "" }],
                duration_ms: 0,
            },
            is_playing: "Paused",
            progress_ms: 0
        };
        //this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    }

    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Login Spotify</h1>

                {!this.state.token && (
                    <a
                        className="btn"
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                    >
                        Login to Spotify
                    </a>
                )}


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