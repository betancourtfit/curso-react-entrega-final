import { getDocs, collection, query, where, doc, updateDoc } from 'firebase/firestore';   
import { useState, createContext } from 'react'
import { db } from '../services/config.js';

export const ProductoContext = createContext({
    productos:[]
})

export const ProductoProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    
//  FUNCION PARA LLAMAR TODOS LOS PRODUCTOS
    const getProd = () => {
        const misProductos = query(collection(db,"products"));
        //const misProductos = query(collection(db,"products"), where("precio","<",380))
        getDocs(misProductos)
            .then(res => {
                setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch((error) => console.log("el error es", error))
        console.log("usestate producto");
        console.log(productos);
    }
    // FUNCION PARA LLAMAR CATEGORIA
    const getCat = (idCategoria) => {
        const misProductos = query(collection(db,"products"), where("idCat","=", idCategoria))
        getDocs(misProductos)
            .then(res => {
                setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch((error) => console.log("el error es", error))
        console.log("usestate producto");
        console.log(productos);
    }

    // FUNCION PARA DESCONTAR STOCK
    const descontarStock = async(producto) => {
        const productoRef = doc(db, "products",producto.id);
        const nuevoStock = producto.stock - 1;
        await updateDoc(productoRef, {stock: nuevoStock});
    }

    return (
        <ProductoContext.Provider value={{productos, getCat,getProd}}>
            {children}
        </ProductoContext.Provider>
    )
}