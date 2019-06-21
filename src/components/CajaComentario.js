import React, { Component } from "react";
import Ratings from 'react-ratings-declarative';
import axios from "axios";

class CajaComentario extends Component {

    constructor() {
        super();
        this.state = {
            idSpotify: '',
            user_display_name: '',
            user_spotify_id: '',
            comentario: '',
            estrellas: 0,
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        alert(this.state.comentario);
        alert(this.state.estrellas);
        alert(this.props.idSpotify);
        alert(this.props.user_display_name);
        alert(this.props.user_spotify_id);
        this.setState({
            idSpotify: this.props.idSpotify,
            user_display_name: this.props.user_display_name,
            user_spotify_id: this.props.user_spotify_id,
            comentario: '',
            estrellas: 0,
        });

        axios({
            method: 'get',
            url: `http://localhost:3777/api/comentarios/usuario?idUsuario=${this.props.user_spotify_id}&idExterno=${this.props.idSpotify}`
        })
            .then(res => {
                console.log(res);
                /*this.setState({
                    
                    
                });*/
            })
    }
    auditar = () => {
        alert(this.state.comentario);
        alert(this.state.estrellas);
        alert(this.state.idSpotify);
        alert(this.state.user_display_name);
        alert(this.state.user_spotify_id);
        axios.post(`http://localhost:3777/api/comentarios/`, {
            comentario: this.state.comentario,
            estrellas: this.state.estrellas,
            idObjetoRelacionado: this.state.idSpotify,
            nombreUsuarioRelacionado: this.state.user_display_name,
            idUsuarioRelacionado: this.state.user_spotify_id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    changeRating = (estrellas) => {
        this.setState({
            estrellas: estrellas
        });
    }

    render = () => {
        return (


            <div className="container">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">¿Qué opinas?</h5>
                                <textarea name="comentario" onChange={this.handleChange} value={this.state.comentario} className="form-control" rows="3"></textarea>
                                <Ratings
                                    name="estrellas"
                                    rating={this.state.estrellas}
                                    widgetRatedColors="purple"
                                    changeRating={this.changeRating}
                                >
                                    <Ratings.Widget widgetDimension="20px" />
                                    <Ratings.Widget widgetDimension="20px" />
                                    <Ratings.Widget widgetDimension="20px" />
                                    <Ratings.Widget widgetDimension="20px" />
                                    <Ratings.Widget widgetDimension="20px" />
                                </Ratings>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <br></br>
                                <div className="row">
                                    <button type="button" className="btn btn-primary btn-block" onClick={this.auditar} >Auditar!</button>
                                </div>
                                <div className="row">
                                    <button type="button" className="btn btn-warning btn-block" >Editar</button>
                                </div>
                                <div className="row">
                                    <button type="button" className="btn btn-danger btn-block" >Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CajaComentario;