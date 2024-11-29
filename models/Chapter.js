import { Schema, model } from "mongoose";

const chapterSchema = new Schema({
    manga_id: {
        type: Schema.Types.ObjectId,
        ref: 'Manga',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    cover_photo: {
        type: String,
        required: true
    },
    pages: [{
        type: String,
        required: true
    }],
    order: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Chapter = model('Chapter', chapterSchema);

export default Chapter;