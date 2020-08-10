import { Router } from 'express';
import imgFlatController from '../controllers/imgFlatController';
import pool from '../database';
class ImgFlatRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        // Imagenes de los pisos de las bibliotecas
        this.router.get('/listar',imgFlatController.list);        
        this.router.post('/crear',imgFlatController.create);
        this.router.put('/actualizar/:id',imgFlatController.update);
        this.router.delete('/borrar/:id',imgFlatController.delete);
        this.router.get('/listar/imagenes/:biblioteca/:piso',imgFlatController.listFloor);
                      
    }
}
const imgFlatRoutes = new ImgFlatRoutes();
export default imgFlatRoutes.router;