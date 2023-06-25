import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./ItemCard.css"

// eslint-disable-next-line react/prop-types
const ItemCard = ({id,nombre,precio,img}) => {
    const [contador, setContador] = useState(0)
    const [carrito, setCarrito] = useState([])

    const aumentarContador = () => {
        if(contador < 5){
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if(contador > 0) {
            setContador(contador -1)
        }
    }

    useEffect(() => {
        const idProducto = document.getElementById(id).id;
    setCarrito([
      ...carrito,
      {
        id: idProducto,
        cantidad: contador
      }
    ])},[contador]
     

    )
    return (
        <Card className="col-4" style={{ width: "14rem" }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body id={id}>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {precio}
                </Card.Text>
                <div className="row d-flex justify-content-center">
                    <div className="justify-self-center">
                        <Button onClick={disminuirContador} variant="warning">-</Button>
                        {
                        contador === 0 ? 
                        <Button onClick={aumentarContador} variant="warning">Agregar</Button> : <strong> {contador} </strong>
                        }
                        <Button onClick={aumentarContador} variant="warning">+</Button>
                    </div>
                </div>
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
