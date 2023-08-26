import express, { type Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import 'dotenv/config'

import routes from './routers'
import errorHandler from './middlewares/error.middleware'

const app: Application = express()

app.set('port', process.env.NODE_PORT || 5000)
app.set('env', process.env.NODE_ENV || 'dev')
app.disable('x-powered-by')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(errorHandler)

export default app