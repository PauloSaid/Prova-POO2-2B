import { Request, Response } from 'express';
import UserServices from '../services/UserServices';
import { Prisma } from '@prisma/client';

class UserController {
    public async list(req: Request, res: Response){
        try{
            const userId: string | undefined = req.params.id
            const users = await UserServices.findUsers(userId);

            return res.json(users);
        }   catch(error){
            console.log(error);
            return res.json()
        }
    }

    public async insert(req: Request, res: Response){
        try{
            const userData: Prisma.UsuarioCreateInput = req.body;

            const user = await UserServices.createUser(userData);

            return res.json(user)
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    public async update(req: Request, res: Response){
        try {
            const usuarioId = req.params.usuarioId;
            const newData: Prisma.UsuarioCreateInput = req.body;

            const user = await UserServices.updateUser(usuarioId, newData);

            return res.json(user);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    public async delete(req: Request, res: Response){
        try {
            const usuarioId = req.params.usuarioId;
            const deletedUser = await UserServices.deleteUser(usuarioId);
            return res.json(deletedUser);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}

export default new UserController();