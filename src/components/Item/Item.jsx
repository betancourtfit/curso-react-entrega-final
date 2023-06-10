import './Item.css'

const Item = ({id,nombre,precio,img}) => {
  return (
    <div>
        <img className="img_producto_home" src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>{precio}</p>
    </div>
  )
}

export default Item
