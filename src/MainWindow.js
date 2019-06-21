import React, { Component } from "react";

//importamos el componente, deben comenzar con mayusculas
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

class MainWindow extends Component {

    constructor() {
        super();
        this.state = {
            authToken: null,
            display_name: null,
            spotify_id: null,
            spotify_uri: null,
        };
    }

    actualizarUsuarioActivo = (token,display_name,spotify_id,spotify_uri) => {
        this.setState({
            authToken: token,
            user_display_name: display_name,
            user_spotify_id: spotify_id,
            spotify_uri: spotify_uri,
        });
    }

    render = () => {
        return (
            <div className="App container-fluid">

                {!this.state.authToken &&
                    <Home actualizarUsuarioActivo={this.actualizarUsuarioActivo.bind(this)}/>
                }                

                {this.state.authToken &&
                    <Dashboard authToken={this.state.authToken} user_display_name={this.state.user_display_name} user_spotify_id={this.state.user_spotify_id}/>
                }  

            </div>
        );
    }
}

export default MainWindow;