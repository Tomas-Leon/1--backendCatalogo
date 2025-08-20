import { Router } from "express";
import { crearProducto, prueba, obtenerProducto} from "../controllers/producto.controllers.js";

const router = Router();

router.route('/prueba').get(prueba);
router.route('/').post(crearProducto).get(obtenerProducto);

export default router