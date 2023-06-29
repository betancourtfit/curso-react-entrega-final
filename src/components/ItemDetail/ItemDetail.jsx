import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados: " + cantidad);
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }
    return (
        <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body >
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{precio}</Card.Text>
            {
                agregarCantidad > 0 ? (<Link to="/cart"> <Button variant="warning"> Terminar Compra</Button></Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }

            </Card.Body>
        </Card>
    );
};

export default ItemDetail;
