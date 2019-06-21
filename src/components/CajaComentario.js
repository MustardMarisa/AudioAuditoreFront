import React, { Component } from "react";
import Ratings from 'react-ratings-declarative';

class CajaComentario extends Component {

    constructor() {
        super();
        this.state = {
            rating: 0,
        };
    }

    changeRating = (newRating) => {
        this.setState({
            rating: newRating
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
                                <textarea className="form-control" rows="3"></textarea>
                                <Ratings
                                    rating={this.state.rating}
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
                                    <button type="button" className="btn btn-primary btn-block" >Auditar!</button>
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