import { useState } from "react";
import { db } from "../../services/config";
import { addDoc, collection } from "firebase/firestore";

import React from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [documentoId, setDocumentoId] = useState(); 
    const [precio, setPrecio] = useState();
    const [idCat, setIdCat] = useState();
    const [stock, setStock] = useState();
    const [img, setImg] = useState();

    const manejadorFormulario = (e) => {
        e.preventDefault();

        // const data = {
        //     nombre: nombre,
        //     precio: precio
        // }

        //const res = db.collection("products").doc(documentoId).set(data);

        addDoc(collection(db,"products"),{
            id: documentoId,
            nombre: nombre,
            precio: precio,
            idCat: idCat,
            stock: stock,
            img: img

        })
    }
    return (
        <>
            <form onSubmit={manejadorFormulario}>
                <h2> Formulario</h2>

                <label htmlFor=""> Nombre</label>
                <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value) } />
                <label htmlFor=""> ID</label>
                <input type="number" value={documentoId} onChange={(e)=> setDocumentoId(e.target.value) } />
                <label htmlFor=""> precio</label>
                <input type="number" value={precio} onChange={(e)=> setPrecio(e.target.value) } />
                <label htmlFor=""> idCat</label>
                <input type="number" value={idCat} onChange={(e)=> setIdCat(e.target.value) } />
                <label htmlFor=""> stock</label>
                <input type="number" value={stock} onChange={(e)=> setStock(e.target.value) } />
                <label htmlFor=""> IMAGEN</label>
                <input type="text" value={img} onChange={(e)=> setImg(e.target.value) } />
                <button type="submit"> enviar</button>
            </form>
        
        </>
    )
}

export default Formulario
