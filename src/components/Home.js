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
                
                <a className="btn" href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                    Login to Spotify
                </a>

                <body className='home'>
                    <section className='mianbox'>
                        <div className="container customer_nav">
                            <h1 className="display-4">Audio</h1>
                            <h1 className="display-4">Audtiore</h1>
                        </div>

                <div className='box_custom'> 

                    <div class="plane main">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                    </div>

                    


                </div>        
                   
                    

                    </section>
                </body>

            

                
            </div>
        );
    }
}

export default Home;