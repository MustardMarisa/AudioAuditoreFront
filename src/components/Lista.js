import React, { Component } from "react";
import { contenedorCancion, contenedorArtista, contenedorPlaylist, listaTipoCarousel, listaTipoList, contenidoListaDisplay, contenidoListaComentarios } from "../functions/config";
import DisplayInfo from "./DisplayInfo";
import Comentario from "./Comentario";
import axios from "axios";

class Lista extends Component {

    constructor() {
        super();
        this.state = {
            playlistsUser: null,
        };
    }

    componentDidMount() {

        //obtenemos las playlist del usuario activo
        if (this.props.tipo === listaTipoCarousel) {
            axios({
                method: 'get',
                url: `https://api.spotify.com/v1/me/playlists`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json ',
                    'Authorization': 'Bearer ' + this.props.authToken,
                }
            })
                .then(res => {
                    this.setState({
                        playlistsUser: res.data.items,
                    });
                })
        }
    }

    mostrarCancion = (objeto) => {
        this.props.cargarObjeto(objeto);
        this.props.actualizarContenedorDerecho(contenedorCancion);
    }

    mostrarArtista = (objeto) => {
        this.props.cargarObjeto(objeto);
        this.props.actualizarContenedorDerecho(contenedorArtista);
    }

    mostrarPlaylist = (objeto) => {
        this.props.cargarObjeto(objeto);
        this.props.actualizarContenedorDerecho(contenedorPlaylist);
    }

    mostrarListaDisplays = () => {
        return (
            <div className="scrollList">
                <ul className="list-group ">
                    {
                        this.props.objetos.map(objeto => (
                            <div key={objeto.id}>
                                <DisplayInfo authToken={this.props.authToken} key={objeto.id} objeto={objeto} queryType={this.props.queryType} actualizarContenedorDerecho={this.props.actualizarContenedorDerecho} cargarObjeto={this.props.cargarObjeto} />
                                <br></br>
                            </div>
                        ))
                    }
                </ul>
            </div>
        );
    }

    render = () => {
        return (
            <div className="container">
                {(this.props.tipo === listaTipoList && this.props.contenidoLista === contenidoListaDisplay) &&
                    this.mostrarListaDisplays()
                }

                {(this.props.tipo === listaTipoList && this.props.contenidoLista === contenidoListaComentarios) &&
                    <div className="scrollList">
                        <ul className="list-group ">
                            <Comentario />
                            <br></br>
                            <Comentario />
                            <br></br>
                            <Comentario />
                        </ul>
                    </div>
                }

                {(this.state.playlistsUser && this.props.tipo === listaTipoCarousel) &&
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {this.state.playlistsUser.map((playlist, index) => (
                                <div key={playlist.id} className={index===0 ? "carousel-item active" : "carousel-item"}  onClick={() => this.mostrarPlaylist(playlist)}>
                                    <div className="hero-image">
                                        {playlist.images.length !== 0 &&
                                            <img src={playlist.images[0].url} className="d-block w-100" alt="" />}
                                        {playlist.images.length === 0 &&
                                            <img src='http://www.fitnessreal.es/wp-content/uploads/2014/05/prohibited-98614_640.png' className="d-block w-100" alt="" />}
                                    </div>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3 className="morado font-weight-bold">{playlist.name}</h3>
                                    </div>
                                </div>
                            ))
                            }

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                }

            </div>
        );
    }
}

export default Lista;