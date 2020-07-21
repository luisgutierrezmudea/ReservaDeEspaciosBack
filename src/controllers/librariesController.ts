import { Request, Response } from 'express';
import pool from '../database';

class LibrariesController {  
    // Tabla bibliotecas (tipos de usuario)
    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO bibliotecas set ?', [req.body]);
        res.json({ message: 'Library saved' });
    }
    public async delete(req: Request, res: Response) :Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM bibliotecas WHERE id = ?', [id]);
        res.json({message:'The Library was deleted'});
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE bibliotecas set ? WHERE id = ?', [req.body,id]);
        res.json({message:'The library was updated'});
    }
    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM bibliotecas', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

const librariesController = new LibrariesController();
export default librariesController;