import { Router } from 'express';
import reservationsStateController from '../controllers/reservationsStateController';
import pool from '../database';
class ReservationsStateRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        // Estados de las reservaciones de las mesas
        this.router.get('/',reservationsStateController.list);        
        this.router.post('/',reservationsStateController.create);
        this.router.put('/:id',reservationsStateController.update);
        this.router.delete('/:id',reservationsStateController.delete);        
    }
}
const tablesStateRoutes = new ReservationsStateRoutes();
export default tablesStateRoutes.router;