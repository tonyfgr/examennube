import express,{json} from "express";
import mysql2 from "mysql2/promise"
import 'dotenv/config'



const app = express()
app.use(json())

const conectar = await mysql2.createConnection({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    database: process.env.DATABASE_DB,
    password: process.env.PASSWORD_DB
})

app.get("/", async (req,res) =>{
    const [hola,] =  await conectar.query("select * from usuarios") 
    res.json(hola)
})
app.post("/usuario", async (req,res) =>{
    const cuerpo = req.body 
    await conectar.query('insert into usuarios values(?,?,?);',
    [cuerpo.nombre,cuerpo.apellido,cuerpo.edad])
    res.json({listo:'aea'})
})

app.listen(3000, () =>{
    console.log('hola esta funcionando')
})