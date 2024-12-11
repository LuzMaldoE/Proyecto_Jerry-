import mongoose, { mongo } from "mongoose";

const tareaeSquema = new mongoose.Schema({
    titulo: {
        type: String,
        trim:true,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,

    },
    fecha: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Tarea',tareaeSquema) 