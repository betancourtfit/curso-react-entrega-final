import { useState, useEffect } from "react";

const JSONplace = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => setUsuario(data))
                .catch((error) => console.log("ayudame", error))},
        []);
    return (
    <div>
        <ul>
            {
            usuario.map(usuario => {
                return( <li key ={usuario.id}> {usuario.name} - {usuario.email}</li>)
            })
            }
        </ul>
    </div>
    )
};

export default JSONplace;
