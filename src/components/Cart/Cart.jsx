import {useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito, eliminarProducto } = useContext(CarritoContext);
    if ( cantidadTotal == 0 ) {
        return (    
            <>
                <h1> Tu carrito está vacío </h1>
                <Link to="/"> Ver productos</Link>
            </>
        )
    } else {
        return (
            <div>
            {carrito.map(prod => (
                <Card className="col-12" style={{ width: "14rem" }} key={prod.item.id}>
                    <Card.Body id={prod.item.id}>
                        <Card.Title>Nombre: {prod.item.nombre}</Card.Title>
                        <Card.Text>Cantidad: {prod.cantidad} </Card.Text>
                        <Card.Link onClick={() => eliminarProducto(prod.item.id)}>Eliminar</Card.Link>
                    </Card.Body>
                </Card>

            ))}
            <Link to="/"> Ver más productos</Link>
            <br></br>
            <Card.Link onClick={() => vaciarCarrito()}>Vaciar Carrito</Card.Link>
            <h3> Total a pagar: ${total}</h3>
            <Link to="/checkout"> Finalizar compra</Link>
        </div>
        )
    }
}

export default Cart
