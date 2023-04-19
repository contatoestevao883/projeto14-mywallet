import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import { MongoClient } from "mongodb"

const app = express()

// Config
app.use(cors())
app.use(express.json())
dotenv.config()


// Conexão DB 
const mongoClient = new MongoClient(process.env.DATABASE_URL)
try{
    await mongoClient.connect()
    console.log("MongoDB conectado!")
} catch (err) {
    console.log(err.meesage)
}

const db = mongoClient.db()

// Shemas

// Endpoints
app.get("/test", (req, res) => {

    res.send("Oiee!")
})

// Deixa o app escutando, à espera de requisições
const PORT = 8000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)) 

