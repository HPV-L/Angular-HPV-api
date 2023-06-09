import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import mongoosePaginate from 'mongoose-paginate-v2';
import slug from 'mongoose-slug-generator';

const plugins = [slug,mongoosePaginate, mongooseDelete];

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        // required: true,
    },
    price: {
        type: Number,
    },
    description: String,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
    sizeId:[{
        type: mongoose.Types.ObjectId,
        ref: "Size"
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    slug: { 
        type: String, 
        slug: "name",
        unique: true 
    },
},{timestamps: true, versionKey: false})

plugins.forEach((plugin) => {
    productSchema.plugin(plugin, {
        deletedAt: true,
        overrideMethods: true,
    });
});


export default mongoose.model('Product', productSchema);