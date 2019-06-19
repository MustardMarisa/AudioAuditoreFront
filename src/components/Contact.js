import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {

    state = {
        nombre: null
    }

    getCharacter = (e) => {
        e.preventDefault();
        const personaje = e.target.elements.personaje.value;
        if (personaje) {
            axios.get(`https://swapi.co/api/people/${personaje}`)
                .then((res) => {
                    const nombre = res.data.name;
                    this.setState({ nombre });
                })
        } else return;
    }

    render() {
        return (
            <div>
                <h2>Ingresa un numero para hacer llamada a la API SWAPI</h2>
                <form onSubmit={this.getCharacter}>
                    <input type="text" name="personaje" />
                    <button>Submit</button>
                </form>
                { this.state.nombre ? <p>Nombre del personaje: { this.state.nombre }</p> : <p>Porfavor introduce un numero.</p> }
            </div>
        );
    }
}

export default Contact;