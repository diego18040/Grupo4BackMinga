import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    online: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const User = model('User', userSchema);

export default User;