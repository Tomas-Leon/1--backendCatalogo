import Server from "./server/config.js";
import routerIndex from "./src/routes/index.routes.js";

const server = new Server();

//agregar las rutas
server.app.use('/api', routerIndex)
server.listen()