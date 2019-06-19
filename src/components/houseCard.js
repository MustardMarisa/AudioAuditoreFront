import React from 'react';
import cardImagen from '../assets/vape.jpg';

class houseCard extends React.Component {

    render() {

        //recibimos los props del padre 
        const { name, desc } = this.props;

        return (
            <div className="card customCard customConteiner">
                <img
                    src={cardImagen}
                    className="card-img-top"
                    alt="lo que sea"
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Tienda</h6>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        );
    }
}

export default houseCard;