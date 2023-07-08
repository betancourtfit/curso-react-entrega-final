import {useState, useEffect}  from 'react';
import { getDocs, collection, query, where, doc, updateDoc } from 'firebase/firestore';   
import { db } from "../../services/config.js"

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        //const misProductos = query(collection(db,"products"));
        const misProductos = query(collection(db,"products"), where("precio","<",380))
        getDocs(misProductos)
            .then(res => {
                setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
    },[productos])

    const descontarStock = async(producto) => {
        const productoRef = doc(db, "products",producto.id);
        const nuevoStock = producto.stock - 1;
        await updateDoc(productoRef, {stock: nuevoStock});
    }

    return (
        <>
            <h2>Productos</h2>
            <div className='prdocutos-container'>
                {
                    productos.map( producto => (
                        <div className='product-card'>
                            <img src={producto.img}></img>
                            <h3>nombre: {producto.nombre}</h3>
                            <p> {producto.precio}</p>
                            <p> {producto.stock}</p>
                            <button onClick={descontarStock}> Comprar</button>
                        </div>
                    )
                        
                    )
                }
            </div>
        </>
    )
}

export default Productos
