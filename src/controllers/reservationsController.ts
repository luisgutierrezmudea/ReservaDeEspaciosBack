import { Request, Response, request } from 'express';
import pool from '../database';

class ReservationsController {  
    // Tabla de  mesas
    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO reservas set ?', [req.body]);
        res.json({ message: 'Reservation saved' });
    }
    public async delete(req: Request, res: Response) :Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM reservas WHERE id = ?', [id]);
        res.json({message:'The reservation was deleted'});
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE reservas set ? WHERE id = ?', [req.body,id]);
        res.json({message:'The reservation was updated'});
    }
    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM reservas', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listOfUserActives(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT reservas.fecha,reservas.hora_final,reservas.hora_inicio,reservas.id,reservas.mesa,bibliotecas.nombre,mesas.piso FROM ((reservas INNER JOIN mesas ON reservas.mesa=mesas.id_biblioteca) INNER JOIN bibliotecas ON mesas.biblioteca=bibliotecas.id ) WHERE (reservas.id_usuarios = ?) and (reservas.id_estado = 1)  ORDER BY reservas.creado DESC',[id], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listOfUserHistory(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT reservas.fecha,reservas.hora_final,reservas.hora_inicio,reservas.id,reservas.mesa,bibliotecas.nombre,mesas.piso,estado_reservas.descripcion FROM ((reservas INNER JOIN mesas ON reservas.mesa=mesas.id_biblioteca) INNER JOIN bibliotecas ON mesas.biblioteca=bibliotecas.id ) INNER JOIN estado_reservas ON reservas.id_estado=estado_reservas.id WHERE (reservas.id_usuarios = ?) and (reservas.id_estado <> 1) ORDER BY reservas.creado DESC',[id], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listActivesDateTable(req: Request, res: Response) {
        const { mesa } = req.params;
        const { fecha } = req.params;
        await pool.query('SELECT * FROM reservas WHERE (mesa = ?) and (fecha = ?)',[mesa,fecha], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

const reservationsController = new ReservationsController();
export default reservationsController;