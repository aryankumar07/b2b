import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import session from 'cookie-session'
import cors from 'cors'
import { config } from './config/app.config'
import connectToDb from './config/database.config'
import { errorHandler } from './middleware/errorHandle.middleware'
import { asyncHandler } from "./middleware/asyncHandler.middleware"

const app = express();
const BASE_PATH = config.BASE_PATH;


app.use(express.json())
app.use(express.urlencoded({ extended: true })) // extended ??


app.use(session({
    name: "session",
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: 'lax'
}))


app.use(cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true
}))




app.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: "everything well"
    })
}))


app.use(errorHandler)

connectToDb()
    .then(() => {
        app.listen(config.PORT, () => {
            console.log(`server is up and running on ${config.PORT}`)
        })
    })
    .catch((error) => {
        console.log(`[Error] failed to conect ${error}`)
    })





