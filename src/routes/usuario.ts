import Router, { Request, Response } from "express"
import knex from "../database/knex"
import AppError from "../utils/AppError";


const router = Router();


// Promise - async

router.post("/", async (req: Request, res: Response) => {
    const objSalvar = req.body

    if (!objSalvar?.senha) {
        throw new AppError("Senha Obrigatória")
    }

    const id_usuario = await knex('usuarios').insert(objSalvar)

    const usuarios = await knex('usuarios').where({ id: id_usuario[0] })

    res.json({ message: "Usuarios Salvar" })
})



router.get('/', (req, res) => {
    res.json({ message: 'Rota de Usuarios' })
})

export default router
