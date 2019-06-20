import React, { Component } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../functions/config";
import hash from "../functions/hash";

class Home extends Component {

    componentDidMount = () => {
        // Set token
        let _token = hash.access_token;
        if (_token) {
            // Set token
            this.props.actualizarAuthToken(_token);
        }
    }

    render = () => {
        return (
            <div>
                <h1>Home</h1>
                <a className="btn" href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                    Login to Spotify
                </a>
            </div>
        );
    }
}

export default Home;