import React, { Component } from "react";

class DisplayInfo extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://i.scdn.co/image/a921902562e5ebd1488143a3929f2a11094db775" className="card-img" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Nombre</h5>
                                <p className="card-text">Album</p>
                                <p className="card-text">Artista</p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayInfo;