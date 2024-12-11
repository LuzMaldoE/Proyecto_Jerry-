import mongoose, { mongo } from "mongoose";

const esquema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})

export default mongoose.model('Usuarios',esquema)