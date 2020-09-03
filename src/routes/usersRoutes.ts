import { Router } from 'express';
import usersController from '../controllers/usersController'
import pool from '../database';
class UserRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        // usuarios
        this.router.get('/',usersController.list);
        this.router.get('/:id',usersController.findOne);
        this.router.post('/especial',usersController.findEspecialUser);
        this.router.post('/',usersController.create);
        this.router.put('/:id',usersController.update);
        this.router.delete('/:id',usersController.delete);        
    }
}
const userRoutes = new UserRoutes();
export default userRoutes.router;