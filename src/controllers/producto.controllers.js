import Producto from "../models/producto.js";
export const prueba = (req, res)=>{
    res.status(200);
    res.send('Este es un mensaje desde el controlador')
}

export const crearProducto = async (req, res)=>{
    try{
        //console.log(req)
        //1- validar los datos del req.body
        //2- crear el producto en la BD
        const productoNuevo = new Producto(req.body)
        await productoNuevo.save();
        //3- enviar el mensaje de respuesta
        res.status(201).json({mensaje: "El producto fue creado correctamente" });
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: "Error al crear el producto" })
    }
}