import mongoose from 'mongoose'

const connectDB = async () =>  {
    try {
        await mongoose.connect("mongodb://localhost:27017/mernDB")
        console.log("Base de datos conectada")
    }catch(error){
        console.log(error)
    }
}

export default connectDB