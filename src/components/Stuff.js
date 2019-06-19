import React, { Component } from "react";

class Stuff extends Component {
    render() {
        return (
            <div>
                <h1>STUFF, Bienvenido, {this.props.name}</h1>
                <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        );
    }
}

export default Stuff;