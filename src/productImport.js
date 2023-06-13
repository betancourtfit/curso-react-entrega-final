    const misProductos = [
        {id:1, nombre: "Andes Origen Rubia 473", precio: 350, img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00002398_04344d50-dacc-4766-a0f0-bc1a0296e665.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:2, nombre: "Andes Origen Roja 473", precio: 370, img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00000366_c76c390a-70ed-4416-9b05-327262c2706c.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:3, nombre: "Andes Origen IPA 473", precio: 380, img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00000367_72295358-969c-493a-8a1a-667c90639221.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"},
        {id:4, nombre: "Andes Origen NegrA 473", precio: 390, img:"https://www.tada.com.ar/_next/image?url=https%3A%2F%2Fmedia.tada.com.ar%2Fproduc_variant%2F00001182_e84753ed-f611-4bed-a3c7-d7b084902ba5.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2&w=1920&q=75"}

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
            },2000)
        })
    }