import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    sdt: {
        type: String,
    },
    role: {
        type: String,
        default: "member"
    }
},{timestamps: true, versionKey: false})

export default mongoose.model('User', userSchema);