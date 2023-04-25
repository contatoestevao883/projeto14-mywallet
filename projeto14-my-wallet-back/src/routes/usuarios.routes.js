import { Router } from "express"
import { signin, signup } from "../controllers/usuarios.controller.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { cadastroSchema, loginSchema } from "../schemas/usuarios.schema.js"

const usuariosRouter = Router()

usuariosRouter.post("/sign-up", validateSchema(cadastroSchema), signup)
usuariosRouter.post("/sign-in", validateSchema(loginSchema), signin)

export default usuariosRouter