import React, { Component } from "react";
import Auth from "../Auth";
import { withRouter } from 'react-router';

class Callback extends Component {

    componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <div>
                <h2>Cargando</h2>
            </div>
        );
    }
}

export default withRouter(Callback);