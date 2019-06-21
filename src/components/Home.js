import React, { Component } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../functions/config";
import hash from "../functions/hash";

import logo from "../auditore_logo.png";

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

            <section className='section'>

                <div className='homeText'>
                    <img src={logo} alt="" />
                </div>

                <div class="box_custom">

                    <div class="view  custom_anim">
                        <div class="plane main">
                            <p className='BrandName'>Audio Auditore</p>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>

                <div className='CardContainer'>
                    <div class="homeCard d-flex justify-content-end box">
                        <div class="card card_custom" >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/1280px-Spotify_logo_horizontal_black.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <div class="">
                                    <p class="card-text">Busca tus playlist, canciones favoritas, artista y danos tu opinión </p>
                                    <a className="btn" href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                                        Login to Spotify
                                    </a>
                                </div>
                            </div>
                        </div>
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                            crossorigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                            crossorigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                            crossorigin="anonymous"></script>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;