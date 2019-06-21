import React, { Component } from "react";
import axios from "axios";

class CancionesPlaylist extends Component {

    constructor() {
        super();
        this.state = {
            tracks: [],
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `https://api.spotify.com/v1/playlists/${this.props.objeto.id}/tracks`,
            headers: {
                'Authorization': 'Bearer ' + this.props.authToken,
            }
        })
            .then(res => {
                console.log(res);
                this.setState({
                    tracks: res.data.items,
                });
            })
    }


    render = () => {
        return (
            <div className="scrollList">
                <ul className="list-group ">
                    {
                        this.state.tracks.map(track => (
                            <div id={track.track.id}>
                                <div className="row no-gutters demotext">
                                    <div className="col-md-5 d-inline-flex">
                                        <img src={track.track.album.images[0].url} className="card-img" alt="" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <p>Cancion: {track.track.name}</p>
                                            <p>Artista: {track.track.artists[0].name}</p>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default CancionesPlaylist;