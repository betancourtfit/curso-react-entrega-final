import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import "./ItemCard.css"

import ItemCount from "../ItemCount/ItemCount";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const ItemCard = ({id,nombre,precio,img,stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);


    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados: " + cantidad);
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }


    return (
        <Card className="col-4" style={{ width: "14rem" }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body id={id}>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text> {precio} </Card.Text>
                <ItemCount inicial={0} stock={stock} funcionAgregar={manejadorCantidad}/>
            {
                
                agregarCantidad > 0 ? (<Link to="/cart"> <Button variant="warning"> Terminar Compra</Button></Link>) : <></>
            }
                <div className="row d-flex justify-content-center pt-2">
                    <Button className='align-self-center col-6' variant="warning">
                    <Link className="button_text" to={`/item/${id}`}>Ver más</Link>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;
