import { Router } from "express"

import categoria from './categoria'
import usuario from './usuario'

const routes = Router()

routes.use('/categorias', categoria)
routes.use('/usuarios', usuario)

export default routes
