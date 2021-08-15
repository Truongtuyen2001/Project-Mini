import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        strim: true,
        maxLength: 32,
        required: false
    },
    description: {
        type: String,
        required: false,
        maxLength: 2000
    },
    price: {
        type: Number,
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: false
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        type: Boolean
    },
    sold: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema)