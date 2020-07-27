import { Router } from 'express';
import tablesController from '../controllers/tablesController';
import pool from '../database';
class TablesRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        // Mesas
        this.router.get('/listar',tablesController.list);        
        this.router.post('/crear',tablesController.create);
        this.router.put('/actualizar/:id',tablesController.update);
        this.router.delete('/borrar/:id',tablesController.delete);
        this.router.get('/listar/piso/:piso',tablesController.listFloor);
        this.router.get('/listar/biblioteca/:biblioteca',tablesController.listLibrary);
        this.router.get('/listar/estado/:estado',tablesController.listState);

                
    }
}
const tablesRoutes = new TablesRoutes();
export default tablesRoutes.router;