import mongoose from 'mongoose'
import { config } from './app.config'

const connectToDb = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log(`Connection to mongo set`)
    } catch (e) {
        console.log(`[Mongo Connection Error] error will connection to mongo`)
        process.exit(1)
    }
}

export default connectToDb;
