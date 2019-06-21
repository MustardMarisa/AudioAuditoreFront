import React, { Component } from "react";
import Lista from "./Lista";
import {
    contenedorCancion, contenedorArtista, contenedorPlaylist, queryCancion, queryArtista,
    queryPlaylist, textoCancion, textoArtista, textoPlaylist, listaTipoList, contenidoListaDisplay
} from "../functions/config";
import axios from "axios";

class Buscador extends Component {

    constructor() {
        super();
        this.state = {
            queryType: queryCancion,
            textoType: textoCancion,
            query: '',
            canciones: null,
            artistas: null,
            playlists: null,
        };
    }

    handleChange = (e) =>{
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    realizarSearch = () => {
        switch (this.state.queryType) {
            case queryCancion:
                this.buscarCanciones();
                break;
            case queryArtista:
                this.buscarArtista();
                break;
            case queryPlaylist:

                break;
            default:
                console.log('error de query de search, ningun tipo haceptado');
                break;
        }
    }

    buscarCanciones = () => {
        axios({
            method: 'get',
            url: `https://api.spotify.com/v1/search?q=${this.state.query}&type=${queryCancion}&market=US`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json ',
                'Authorization': 'Bearer ' + this.props.authToken,
            }
        })
            .then(res => {
                this.setState({
                    canciones: res.data.tracks.items,
                    artistas: null,
                    playlists: null,
                });
            })
    }

    buscarArtista = () => {
        axios({
            method: 'get',
            url: `https://api.spotify.com/v1/search?q=${this.state.query}&type=${queryArtista}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json ',
                'Authorization': 'Bearer ' + this.props.authToken,
            }
        })
            .then(res => {
                this.setState({
                    canciones: null,
                    artistas: res.data.artists.items,
                    playlists: null,
                });                
            })
    }

    buscarPlaylist = () => {
        axios({
            method: 'get',
            url: `https://api.spotify.com/v1/search?q=${this.state.query}&type=${queryCancion}&market=US`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json ',
                'Authorization': 'Bearer ' + this.props.authToken,
            }
        })
            .then(res => {
                this.setState({
                    canciones: res.data.tracks.items,
                    artistas: null,
                    playlists: null,
                });
                console.log(res.data.tracks.items);
            })
    }

    componentDidMount = () => {
        this.cambiarQuery(this.state.queryType);
    }

    cambiarQuery = (type) => {
        switch (type) {
            case queryCancion:
                this.setState({
                    queryType: queryCancion,
                    textoType: textoCancion,
                    canciones: null,
                    artistas: null,
                    playlists: null,
                });
                break;
            case queryArtista:
                this.setState({
                    queryType: queryArtista,
                    textoType: textoArtista,
                    canciones: null,
                    artistas: null,
                    playlists: null,
                });
                break;
            case queryPlaylist:
                this.setState({
                    queryType: queryPlaylist,
                    textoType: textoPlaylist,
                    canciones: null,
                    artistas: null,
                    playlists: null,
                });
                break;
            default:
                this.setState({
                    queryType: queryCancion,
                    textoType: textoCancion,
                    canciones: null,
                    artistas: null,
                    playlists: null,
                });
                break;
        }
    }

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
            <div >
                <div className="container">
                    <div className="row d-inline-flex">
                        <div className="col-sm">
                            <input type="text" className="form-control" name="query" onChange={this.handleChange} value={this.state.query} placeholder="¿Qué quieres buscar?..." />
                        </div>
                    </div>
                    <div className="row d-inline-flex">
                        <div className="col btn-group">
                            <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                                <span className="selection">{this.state.textoType}</span><span className="caret"></span>
                            </button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={() => this.cambiarQuery(queryCancion)}>{textoCancion}</button>
                                <button className="dropdown-item" onClick={() => this.cambiarQuery(queryArtista)}>{textoArtista}</button>
                                <button className="dropdown-item" onClick={() => this.cambiarQuery(queryPlaylist)}>{textoPlaylist}</button>
                            </div>
                        </div>

                        <div className="col">
                            <button className="btn btn-info" onClick={this.realizarSearch}>
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>

                <br></br>

                {this.state.canciones &&
                    <Lista queryType={this.state.queryType} objetos={this.state.canciones} tipo={listaTipoList} contenidoLista={contenidoListaDisplay} actualizarContenedorDerecho={this.props.actualizarContenedorDerecho} />
                }
                {this.state.artistas &&
                    <Lista queryType={this.state.queryType} objetos={this.state.artistas} tipo={listaTipoList} contenidoLista={contenidoListaDisplay} actualizarContenedorDerecho={this.props.actualizarContenedorDerecho} />
                }
                {this.state.playlists &&
                    <Lista queryType={this.state.queryType} objetos={this.state.playlists} tipo={listaTipoList} contenidoLista={contenidoListaDisplay} actualizarContenedorDerecho={this.props.actualizarContenedorDerecho} />
                }
                
            </div>

        );
    }
}

export default Buscador;