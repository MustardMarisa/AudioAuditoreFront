import React, { Component } from "react";
import Ratings from 'react-ratings-declarative';

class Comentario extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <div className="card-body">
                                <p className="">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
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
                                <img src="https://profile-images.scdn.co/images/userprofile/default/9f903f2e25bdafdba25bb0482b305ff8240b6f07" width="50" height="50" alt="" classNameName="rounded-circle" />
                                <p>Carlos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comentario;