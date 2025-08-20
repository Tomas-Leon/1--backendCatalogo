export const prueba = (req, res)=>{
    res.status(200);
    res.send('Este es un mensaje desde el controlador')
}

export const crearProducto = async (req, res)=>{
    try{
        //console.log(req)
        console.log(req.body)
        //1- validar los datos del req.body
        //2- crear el producto en la BD
        //3- enviar el mensaje de respuesta
        res.send('desde la logica de crear producto')
    }catch(error){
        console.error(error)
    }
}