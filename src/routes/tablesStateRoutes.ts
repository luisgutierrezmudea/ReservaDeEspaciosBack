import { Router } from 'express';
import tablesStateController from '../controllers/tablesStateController';
import pool from '../database';
class TablesStateRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        // Estados de las mesas
        this.router.get('/',tablesStateController.list);        
        this.router.post('/',tablesStateController.create);
        this.router.put('/:id',tablesStateController.update);
        this.router.delete('/:id',tablesStateController.delete);        
    }
}
const tablesStateRoutes = new TablesStateRoutes();
export default tablesStateRoutes.router;