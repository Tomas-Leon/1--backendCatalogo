import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

export default class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares()
    }

    //agregar metodos
    middlewares(){
        this.app.use(cors());//recibir coneciones remotas
        this.app.use(morgan('dev'))//info extra en la terminal
        this.app.use(express.json())//interpreta solicitudes en formatos json
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        console.log(__filename)
        console.log(__dirname)
        this.app.use(express.static(path.join(__dirname,'../public')))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.info(`Server iniciado: http://localhost:${this.port}`)
        })
    }

}