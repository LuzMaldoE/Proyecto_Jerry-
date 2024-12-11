import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './rutas/autRutas.js'
import tasRutas from './rutas/tasRutas.js'


const app = express()

app.use(cors({
        origin:'http://localhost:5173'
}))

app.use(morgan("dev"))
app.use(express.json())
app.use('/api',router)
app.use('/api',tasRutas)

export default app;