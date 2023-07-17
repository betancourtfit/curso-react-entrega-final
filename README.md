# TaDa Delivery de Bebidas
Este es un proyecto de Ecommerce de un delivery de bebidas construido sobre React como proyecto final del curso de React de Coderhouse. La aplicacion permite visualizar un catálogo basico de productos, armar un carrito a elección y luego generar una orden que queda registrada en Firebase Storage

## Tecnologías utilizadas
- Vite
- React
- React Router
- Firebase
- Bootstrap for React: Para proporcionar a la UI un diseño más estético y responsivo

## Funcionalidades
- Ver una lista de productos disponibles en una base de datos onlne
- Agregar productos al carrito de compras
- Ver el carrito de compras
- Generar una orden de compra

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
4. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.
