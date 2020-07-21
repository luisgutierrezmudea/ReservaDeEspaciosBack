import { Request, Response } from 'express';
import pool from '../database';

class TablesStateController {  
    // Tabla estado_mesas (Estados en los que se puede encontrar una mesa)
    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO estado_mesas set ?', [req.body]);
        res.json({ message: 'Table State saved' });
    }
    public async delete(req: Request, res: Response) :Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM estado_mesas WHERE id = ?', [id]);
        res.json({message:'The Table State was deleted'});
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE estado_mesas set ? WHERE id = ?', [req.body,id]);
        res.json({message:'The Table State was updated'});
    }
    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM estado_mesas', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

const tablesStateController = new TablesStateController();
export default tablesStateController;