import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from 'uuid';

export async function signup(req, res) {
    const { name, email, password } = req.body

    try {
        const usuario = await db.collection("usuarios").findOne({ email })
        if (usuario) return res.send(409).send("E-mail já cadastrado")

        const hash = bcrypt.hashSync(password, 10)


        await db.collection("usuarios").insertOne({ name, email, senha: hash })
        res.status(201).send("Conta criada com sucesso")
    } catch (err) {
        res.status(500).send(err.meesage)
    }
}

export async function signin(req, res) {
    const { email, password } = req.body

    try {
         const usuario = await db.collection("usuarios").findOne({ email })
         const senhaUsuario = await db.collection("usuarios").findOne({ password })
         console.log(senhaUsuario)
        if (!usuario) return res.status(401).send("E-mail não cadastrado.")

        if (!bcrypt.compareSync(password, senhaUsuario)) return res.status(401).send("Senha incorreta")

        const token = uuid()

        await db.collection("sessoes").insertOne({ token, idUsuario: usuario._id })
        res.status(200).send(token)

     } catch (err) {
            res.status(500).send(err.message)
    }
}