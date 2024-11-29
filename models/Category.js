import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    hover: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cover_photo: {
        type: String,
        required: true
    },
    character_photo: {
        type: String,
        required: true
    },
    admin_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Category = model('Category', categorySchema);

export default Category;