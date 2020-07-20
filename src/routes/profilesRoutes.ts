import { Router } from 'express';
import profilesController from '../controllers/profilesController';
import pool from '../database';
class ProfilesRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{        
        //perfiles  de usuario
        this.router.post('/',profilesController.createP);
        this.router.get('/',profilesController.listP);
        this.router.put('/:tipo',profilesController.updateP);
        this.router.delete('/:tipo',profilesController.deleteP);
    }
}
const profilesRoutes = new ProfilesRoutes();
export default profilesRoutes.router;