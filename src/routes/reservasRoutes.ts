import { Router } from 'express';
import reservasController from '../controllers/reservasController'
import pool from '../database';
class ReservationRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',reservasController.index);
    }
}
const reservationRoutes = new ReservationRoutes();
export default reservationRoutes.router;