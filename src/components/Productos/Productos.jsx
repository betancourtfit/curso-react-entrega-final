import {useState, useEffect}  from 'react';
import { getDocs, collection, query  , where, doc, updateDoc } from 'firebase/firestore';   
import { db } from "../../services/config.js"
import ItemCard from "../ItemCard/ItemCard";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    console.log("usestate producto");
    console.log(productos);
    useEffect( () => {
        const misProductos = query(collection(db,"products"));
        //const misProductos = query(collection(db,"products"), where("precio","<",380))
        getDocs(misProductos)
            .then(res => {
                setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch((error) => console.log("el error es", error))

    },[])



    const descontarStock = async(prod) => {
        const productoRef = doc(db, "products",prod.id);
        const nuevoStock = prod.stock - 1;
        await updateDoc(productoRef, {stock: nuevoStock});
    }

    return (
        <>
            <h2>Productos</h2>
            <div className='productos-container'>
                {
                    productos.map( prod => (
                        <ItemCard key={prod.id} {...prod} />

                    ))

                }
            </div>
        </>
    )
}

export default Productos


                    {/*                     
                    productos.map( producto => (
                        <div className='product-card'>
                            <img src={producto.img}></img>
                            <h3>nombre: {producto.nombre}</h3>
                            <p> {producto.precio}</p>
                            <p> {producto.stock}</p>
                            <button onClick={descontarStock}> Comprar</button>
                        </div>
                    )) */}




