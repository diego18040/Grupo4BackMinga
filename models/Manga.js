import { Schema, model } from "mongoose";

const mangaSchema = new Schema({
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: false
    },
    company_id: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: false
    },
    title: {
        type: String,
        required: true
    },
    cover_photo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
});

const Manga = model('Manga', mangaSchema);

export default Manga;