    const misProductos = [
        {id:"1", nombre: "Andes Origen Rubia 473", precio: 350,idCat:"1", img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00002398_04344d50-dacc-4766-a0f0-bc1a0296e665.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:"2", nombre: "Andes Origen Roja 473", precio: 370, idCat:"1", img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00000366_c76c390a-70ed-4416-9b05-327262c2706c.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:"3", nombre: "Andes Origen IPA 473", precio: 380, idCat:"1", img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00000367_72295358-969c-493a-8a1a-667c90639221.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:"4", nombre: "Andes Origen IPA Roja 473", precio: 390, idCat:"1", img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00001182_e84753ed-f611-4bed-a3c7-d7b084902ba5.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:"5", nombre: "Pepsi Black 1,5lt", precio: 318, idCat:"3", img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00000145_065d3f79-67a2-409a-925a-8b59cb579be6.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:"6", nombre: "Gin Bosque + 2 Paso de los Toros", precio: 3000, idCat:"2", img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00000145_065d3f79-67a2-409a-925a-8b59cb579be6.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:"7", nombre: "7 Up Sin Azúcar 1,5lt", precio: 515, idCat:"3", img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00000150_4821289d-c460-416b-a90d-9bc0e2603ec2.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:"8", nombre: "Gin Patagonia Ginkgo", precio: 2700, idCat:"2", img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00001481_e10b40b2-362b-4302-bb9c-94fb858b9384.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},


    ]

    export const getProductos = () => {
        return new Promise((res) => {
            setTimeout(() => {
                res(misProductos)
            }
            ,2000)
        })
    }

    export const getUnProducto = (id) =>{
        return new Promise((res) => {
            setTimeout(()=> {
                res(misProductos.find((prod) => prod.id == id));
            },500)
        })
    }

    // Funcion que retorna la categoria
    export const getProductosPorCategoria = (idCategoria) =>{
        return new Promise((res) => {
            setTimeout(()=> {
                res(misProductos.filter((prod) => prod.idCat == idCategoria));
            },500)
        })
    }