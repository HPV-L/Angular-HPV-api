import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Product",
    }],
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
        required: true
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
        type: Number,
        required: true
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