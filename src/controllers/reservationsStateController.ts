import { Request, Response } from 'express';
import pool from '../database';

class ReservationsStateController {  
    // Tabla estado_reservas (Estado de la reserva)
    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO estado_reservas set ?', [req.body]);
        res.json({ message: 'Reservation State saved' });
    }
    public async delete(req: Request, res: Response) :Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM estado_reservas WHERE id = ?', [id]);
        res.json({message:'The Reservation State was deleted'});
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE estado_reservas set ? WHERE id = ?', [req.body,id]);
        res.json({message:'The Reservation State was updated'});
    }
    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM estado_reservas', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

const reservationsStateController = new ReservationsStateController();
export default reservationsStateController;