import { Router } from 'express';
import reservationsController from '../controllers/reservationsController';
import pool from '../database';
class ReservationsRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        // Reservas
        this.router.get('/listar',reservationsController.list);        
        this.router.post('/crear',reservationsController.create);
        this.router.put('/actualizar/:id',reservationsController.update);
        this.router.delete('/borrar/:id',reservationsController.delete);  
        this.router.get('/listar/usuario_activas/:id',reservationsController.listOfUserActives);       
        this.router.get('/listar/usuario_historico/:id',reservationsController.listOfUserHistory);
        this.router.get('/listar/activas_fecha_mesa/:fecha/:mesa',reservationsController.listActivesDateTable); 
        this.router.post('/horas_reservadas',reservationsController.countHours);

    }
}
const reservationsRoutes = new ReservationsRoutes();
export default reservationsRoutes.router;