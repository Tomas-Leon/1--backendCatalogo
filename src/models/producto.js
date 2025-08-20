import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 1000000,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Infusiones", "Batidos", "Dulce", "Salado"],
  },
  descripcion_breve: {
    type: String,
    required: true,
    maxlength: 250,
    minlength: 5,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    maxlength: 500,
    minlength: 10,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /^(https?:\/\/?([\da-z\-]+)\([a-z\.}]{2,6})([\/\w \-]*)*\/?(jpg|jpeg|png|webg))$/.test(
          valor
        );
      },
    },
  },
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;