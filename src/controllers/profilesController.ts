import { Request, Response } from 'express';
import pool from '../database';

class ProfilesController {
    // Tabla perfiles (tipos de usuario)
    public async createP(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO perfiles set ?', [req.body]);
        res.json({ message: 'Profile saved' });
    }
    public async deleteP(req: Request, res: Response) :Promise<void>{
        const { tipo } = req.params;
        await pool.query('DELETE FROM perfiles WHERE tipo = ?', [tipo]);
        res.json({message:'The profile was deleted'});
    }
    public async updateP(req: Request, res: Response) {
        const { tipo } = req.params;
        await pool.query('UPDATE perfiles set ? WHERE tipo = ?', [req.body,tipo]);
        res.json({message:'The profile was updated'});
    }
    public async listP(req: Request, res: Response) {
        await pool.query('SELECT * FROM perfiles', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

const profilesController = new ProfilesController();
export default profilesController;