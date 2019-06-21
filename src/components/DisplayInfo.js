import React, { Component } from "react";
import Ratings from 'react-ratings-declarative';
import { contenedorCancion, contenedorArtista, contenedorPlaylist } from "../functions/config";

class DisplayInfo extends Component {

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
            <div className="container">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-5 d-inline-flex">
                            <img src="https://i.scdn.co/image/a921902562e5ebd1488143a3929f2a11094db775" className="card-img" alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                                <Ratings
                                    rating={2}
                                    widgetRatedColors="purple"
                                >
                                    <Ratings.Widget widgetDimension="15px" />
                                    <Ratings.Widget widgetDimension="15px" />
                                    <Ratings.Widget widgetDimension="15px" />
                                    <Ratings.Widget widgetDimension="15px" />
                                    <Ratings.Widget widgetDimension="15px" />
                                </Ratings>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayInfo;