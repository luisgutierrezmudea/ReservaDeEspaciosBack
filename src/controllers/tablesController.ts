import { Request, Response, request } from 'express';
import pool from '../database';

class TablesController {
    // Tabla de  mesas
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO mesas set ?', [req.body]);
        res.json({ message: 'Table saved' });
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM mesas WHERE id_biblioteca = ?', [id]);
        res.json({ message: 'The table was deleted' });
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE mesas set ? WHERE id_biblioteca = ?', [req.body, id]);
        res.json({ message: 'The table was updated' });
    }
    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM mesas', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listFloor(req: Request, res: Response) {
        const { piso } = req.params;
        await pool.query('SELECT * FROM mesas WHERE piso = ?', [piso], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listLibrary(req: Request, res: Response) {
        const { biblioteca } = req.params;
        await pool.query('SELECT * FROM mesas WHERE biblioteca = ?', [biblioteca], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listState(req: Request, res: Response) {
        const { estado } = req.params;
        await pool.query('SELECT * FROM mesas WHERE id_estado_mesa = ?', [estado], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listAvailable(req: Request, res: Response): Promise<void> {
        const { fecha } = req.body;
        const { horainicio } = req.body;
        const { horafinal } = req.body;
        const { piso } = req.body;
        const { biblioteca } = req.body;
        await pool.query('SELECT mesas.id,mesas.id_biblioteca,mesas.piso,mesas.biblioteca FROM mesas INNER JOIN reservas ON mesas.id_biblioteca=reservas.mesa WHERE reservas.id_estado=1 and mesas.id_estado_mesa=1 and mesas.piso=?  and reservas.fecha=? and mesas.biblioteca=? and (((reservas.hora_inicio< ?)and(reservas.hora_final> ?)) or  ((reservas.hora_inicio>=?)and(reservas.hora_final<=?)) or  ((reservas.hora_inicio<?)and(reservas.hora_final>?)))', [parseFloat(piso),fecha,parseFloat(biblioteca),parseFloat(horainicio),parseFloat(horainicio),parseFloat(horainicio),parseFloat(horafinal),parseFloat(horafinal),parseFloat(horafinal)], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listFloors(req: Request, res: Response) {
        const { biblioteca } = req.params;
        await pool.query('SELECT DISTINCT piso FROM mesas WHERE biblioteca = ?', [biblioteca], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

const tablesController = new TablesController();
export default tablesController;