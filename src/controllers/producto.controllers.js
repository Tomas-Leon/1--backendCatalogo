import Producto from "../models/producto.js";
export const prueba = (req, res) => {
  res.status(200);
  res.send("Este es un mensaje desde el controlador");
};

export const crearProducto = async (req, res) => {
  try {
    //console.log(req)
    //1- validar los datos del req.body
    //2- crear el producto en la BD
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    //3- enviar el mensaje de respuesta
    res.status(201).json({ mensaje: "El producto fue creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el producto" });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    //1- buscar los productos en la BD
    console.log("Método recibido:", req.method);
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);
    //2- responder con el status adecuado 200 y devolver los productos
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error obtener los productos" });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    //1- buscar el producto por el campo del id
    const productoBuscado = await Producto.findById(req.params.id);
    //2- chekear que encontre el producto con un codigo de error
    if (!productoBuscado) {
      res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //3- envial el producto en la respuesta
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error obtener el producto por id" });
  }
};

export const borrarProductoPorId = async (req, res) => {
  try {
    //1- eliminar el producto por id
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    console.log(productoEliminado);
    //2-verificar que pude encontrar el producto a eliminar
    if (!productoEliminado) {
      res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //3- enviar la respuesta de que pude eliminar
    res.status(200).json({ mensaje: "producto eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "no se pudo elimiar el producto por id" });
  }
};

export const actualizarProductoPorId = async (req, res) => {
  try {
    //1- buscar el producto por id y modificar
    const productoEditado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    //2- chequear si pudo encontrar el producto
    if (!productoEditado) {
      res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //3- enviar mensaje
    res.status(200).json({ mensaje: "producto editado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "no se pudo editar el producto" });
  }
};
