import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = {
    name: 'fabricio',
    email: 'fabricio.riff2@gmail.com'
}

interface IUser {
    name:string;
    email:string;
}
const usersArr: Array<IUser> = [];

usersArr.push(users);

export default {
    async index(req: Request, res: Response) {
        console.log(usersArr)
        return res.json(usersArr);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'fabricio', email: 'fabricio.riff2@gmail.com' },
            message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo' }
        });

        return res.send();
    }
}