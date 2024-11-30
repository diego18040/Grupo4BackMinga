import { number } from "joi";
import { Schema, model } from "mongoose";

const reactionSchema = new Schema({
    manga_id: {
        type: Schema.Types.ObjectId,
        ref: 'Manga',
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
    reaction: {
        type: number,
        required: true,
        enum: [1,2,3,4,5]
    }
}, {
    timestamps: true
});

const Reaction = model('Reaction', reactionSchema);

export default Reaction;