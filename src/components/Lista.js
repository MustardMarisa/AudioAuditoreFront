import React, { Component } from "react";
import { contenedorCancion, contenedorArtista, contenedorPlaylist } from "../functions/config";

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

    render = () => {
        return (
            <div>
                <h1>Lista</h1>
                {this.props.tipo &&
                    <div>
                        <button type="button" class="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                        <button type="button" class="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                        <button type="button" class="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                    </div>
                }

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://i.scdn.co/image/ea4996e789ba320b510225702129af9909993c48" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://i.scdn.co/image/a921902562e5ebd1488143a3929f2a11094db775" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://i.scdn.co/image/7859070b48ee27636ef827bb42da1d5245a6dc77" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>
        );
    }
}

export default Lista;