import React, { Component } from "react";
import Ratings from 'react-ratings-declarative';
import {
    contenedorCancion, contenedorArtista, contenedorPlaylist,
    queryCancion, queryArtista, queryPlaylist
} from "../functions/config";
import axios from "axios";

class DisplayInfo extends Component {

    obtenerArtista = (id) => {
        axios({
            method: 'get',
            url: `https://api.spotify.com/v1/artists/${id}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json ',
                'Authorization': 'Bearer ' + this.props.authToken,
            }
        })
            .then(res => {
                console.log(res);
                return res;
            })
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

    construirCancion = () => {
        return (
            <div className="row no-gutters">
                <div className="col-md-5 d-inline-flex">
                    <img src={this.props.objeto.album.images[0].url} className="card-img" alt="" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <button type="button" className="btn btn-link" onClick={() => this.mostrarCancion(this.props.objeto)}>{this.props.objeto.name}</button>
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
        return (
            <div className="row no-gutters">
                <div className="col-md-5 d-inline-flex">
                    {console.log(this.props.objeto)}
                    {this.props.objeto.images.length !== 0 &&
                        <img src={this.props.objeto.images[0].url} className="card-img" alt="" />}
                    {this.props.objeto.images.length === 0 &&
                        <img src='http://www.fitnessreal.es/wp-content/uploads/2014/05/prohibited-98614_640.png' className="card-img" alt="" />}
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <button type="button" className="btn btn-link" onClick={() => this.mostrarArtista(this.props.objeto)}>{this.props.objeto.name}</button>
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

    construirPlaylist = () => {
        return (
            <div className="row no-gutters">
                <div className="col-md-5 d-inline-flex">
                    {this.props.objeto.images.length !== 0 &&
                        <img src={this.props.objeto.images[0].url} className="card-img" alt="" />}
                    {this.props.objeto.images.length === 0 &&
                        <img src='http://www.fitnessreal.es/wp-content/uploads/2014/05/prohibited-98614_640.png' className="card-img" alt="" />}
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <button type="button" className="btn btn-link" onClick={() => this.mostrarPlaylist(this.props.objeto)}>{this.props.objeto.name}</button>
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

    render = () => {
        return (

            <div className="container">
                <div className="card">
                    {this.props.queryType === queryCancion &&
                        this.construirCancion()
                    }
                    {this.props.queryType === queryArtista &&
                        this.construirArtista()
                    }
                    {this.props.queryType === queryPlaylist &&
                        this.construirPlaylist()
                    }
                </div>
            </div>
        );
    }
}

export default DisplayInfo;