import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [{
        id: { type: mongoose.Schema.Types.ObjectId, required: true },
        name: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
      }],    
    name: {
        type: String,
        required: true
    },
    quantyti: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status:{
        type: String,
        default: "Checking"
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    notes:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
},{timestamps: true, versionKey: false})

export default mongoose.model('Order', orderSchema);