import React, { Component } from "react";
import { contenedorCancion, contenedorArtista, contenedorPlaylist, listaTipoCarousel, listaTipoList, contenidoListaDisplay, contenidoListaComentarios } from "../functions/config";
import DisplayInfo from "./DisplayInfo";
import Comentario from "./Comentario";

class Lista extends Component {

    mostrarCancion = () => {
        this.props.actualizarContenedorDerecho(contenedorCancion);
    }

    mostrarArtista = () => {
        this.props.actualizarContenedorDerecho(contenedorArtista);
    }

    mostrarPlaylist = () => {
        this.props.actualizarContenedorDerecho(contenedorPlaylist);
    }

    mostrarListaDisplays = () => {
        return (
            <div className="scrollList">
                <ul className="list-group ">
                    {
                        
                        this.props.objetos.map(objeto => (
                            <div>
                            <DisplayInfo key={objeto.id} objeto={objeto} queryType={this.props.queryType} actualizarContenedorDerecho={this.props.actualizarContenedorDerecho} />
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

                {(this.props.tipo === listaTipoCarousel) &&
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item active" onClick={this.mostrarPlaylist}>
                                <div className="hero-image">
                                    <img className="d-block w-100" src="https://i.scdn.co/image/ea4996e789ba320b510225702129af9909993c48" alt="" />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="morado font-weight-bold">Lovesick</h3>
                                </div>
                            </div>

                            <div className="carousel-item" onClick={this.mostrarPlaylist}>
                                <div className="hero-image">
                                    <img className="d-block w-100" src="https://i.scdn.co/image/a921902562e5ebd1488143a3929f2a11094db775" alt="" />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="morado font-weight-bold">Lovesick</h3>
                                </div>
                            </div>

                            <div className="carousel-item" onClick={this.mostrarPlaylist}>
                                <div className="hero-image">
                                    <img className="d-block w-100" src="https://i.scdn.co/image/7859070b48ee27636ef827bb42da1d5245a6dc77" alt="" />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="morado font-weight-bold">Lovesick</h3>
                                </div>
                            </div>

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