import Router from 'express'
import knex from '../database/knex'
import AppError from '../utils/AppError'
import { hash } from 'bcrypt'

const router = Router()

router.post('/', async (req,res) =>{
    const {email, senha} = req.body

    const user = await knex('usuarios').where({})
})