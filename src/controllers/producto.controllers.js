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

export const obtenerProducto = async (req, res)=>{
    try{
        //1- buscar los productos en la BD
        const listaProductos = await Producto.find();
        res.status(201).json(listaProductos);
        //2- responder con el status adecuado 200 y devolver los productos
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: "Error obtener los productos" })
    }
}