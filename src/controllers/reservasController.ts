import {Request,Response} from 'express';
import pool from '../database';

class ReservasController {
    public index (req:Request,res:Response) {
        pool.query('DESCRIBE reservas');
        res.json('games');
    }
}

 const reservasController=new ReservasController();
 export default reservasController;