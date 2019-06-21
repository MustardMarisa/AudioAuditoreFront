import React, { Component } from "react";
import Ratings from 'react-ratings-declarative';
import { contenedorCancion, contenedorArtista, contenedorPlaylist,
        queryCancion, queryArtista, queryPlaylist } from "../functions/config";

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

    construirCancion = () => {
        return (
            <div className="row no-gutters">
                <div className="col-md-5 d-inline-flex">
                    <img src={this.props.objeto.album.images[0].url} className="card-img" alt="" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>{this.props.objeto.name}</button>
                        <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>{this.props.objeto.artists[0].name}</button>
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
        );
    }

    construirArtista = () => {

    }

    construirPlaylist = () => {

    }

    render = () => {
        return (
            
            <div className="container">
                <div className="card">
                {this.props.queryType===queryCancion &&
                    this.construirCancion()
                }
                {this.props.queryType===queryArtista &&
                    this.construirArtista()
                }
                {this.props.queryType===queryPlaylist &&
                    this.construirPlaylist()
                }
                </div>
            </div>
        );
    }
}

export default DisplayInfo;