import { Router } from 'express';
import reservationsController from '../controllers/reservationsController'
import pool from '../database';
class ReservationRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',reservationsController.index);
    }
}
const reservationRoutes = new ReservationRoutes();
export default reservationRoutes.router;