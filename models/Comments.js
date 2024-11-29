import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    chapter_id: {
        type: Schema.Types.ObjectId,
        ref: 'Chapter',
        required: true
    },
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
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Comment = model('Comment', commentSchema);

export default Comment;