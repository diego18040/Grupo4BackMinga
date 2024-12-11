import { Schema, model } from "mongoose";

const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Company = model('Company', companySchema);

export default Company;