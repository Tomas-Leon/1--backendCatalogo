import { Router } from "express";
import productoRouter from "./producto.routes.js";

const router =Router();

router.use('/productos', productoRouter)

export default router;