import {useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { addDoc, doc, getDoc, updateDoc, collection } from 'firebase/firestore';


const Checkout = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");


    const manejadorFormulario = (e) => { 
        e.preventDefault(); 
        setError("")

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los mails no coinciden");
            return;
        }

        const order = {
            items: carrito.map(prod =>({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            fecha: new Date(),
            totalQuantity: cantidadTotal,
            totalAmount: total,
            buyer:{
            nombre,
            apellido,
            telefono,
            email
            }
        };

        console.log("enviado con exito")
        Promise.all(
            order.items.map(async (prod) => {
                const productoRef = doc(db,"products",prod.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - prod.cantidad
                });
            })
        )
            .then(()=> {
                addDoc(collection(db,"orders"), order)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Error al crear orden",error);
                        setError(error);
                    })
            })
            .catch( (error) => {
                console.log("Error al actualizar stock", error);
                setError("Error al actualizar el stock")
            })



    }

    return (
        <>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                <div className='form-group'>
                    <label htmlFor='nombre'> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value) } />
                </div>

                <div className='form-group'>
                    <label htmlFor='nombre'> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value) } />
                </div>

                <div className='form-group'>
                    <label htmlFor='telefono'> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value) } />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'> Email </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value) } />
                </div>

                <div className='form-group'>
                    <label htmlFor='confirmacionEmail'> Confirma tu mail </label>
                    <input type="text" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value) } />
                </div>
                <button type="submit"> Finalizar Compra </button>
            </form>

            {
                error && <p style={{ color: "red" }}> {error} </p>
            }

            {
                orderId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {orderId} </strong>
                )
            }
            {/* <div>
                {carrito.map(prod => (
                    <div key={prod.item.id}>
                        <p>
                            {prod.item.nombre} x {prod.cantidad}
                        </p>
                    </div>
                ))

                }
            </div> */}
        </>
    )
}

export default Checkout
