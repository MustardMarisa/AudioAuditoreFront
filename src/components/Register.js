import React from 'react';
import Card from "./houseCard";

import axios from "axios";

const HOST = `http://localhost:3777`;


class Register extends React.Component {


    state = {
        counter: 0,
        houses: []
    }

    componentDidMount(){
        axios.get(`${HOST}/api/tiendas`)
        .then((response)=>{
            console.log(response);
            this.setState({
                houses: response.data,
            })            
        });
    }

    addNewHouse = () => {
        // recibe objeto o funcion
        // a la funcion le llega el estado actual
        this.setState(state => {
            return ({
                houses: [...state.houses, { name: 'otro', desc: 'otro' }]
            })
        })
    }

    render() {
        return (
            <div>

                <div>
                    <button onClick={this.addNewHouse}>CUCK!</button>
                    <p>{this.state.counter}</p>
                </div>


                <div className="customContainer">
                {
                    //el parentesis, significa return (como previamente visto)

                    this.state.houses.map(house => (
                        <Card
                            //pasamos los props
                            name={house.nombre}
                            desc={house.direccion}
                        />
                    ))
                }
                </div>
            </div>
        );
    }
}

export default Register;