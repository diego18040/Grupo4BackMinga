import joi from 'joi';

const userUpdateSchema = joi.object({
    // ID OBLIGATORIO
    user: joi.string()
        .required()
        .messages({
            'string.empty': 'User ID is required',
            'any.required': 'User ID is required'
        }),
    photo: joi.string()
        .uri()
        .messages({
            'string.uri': 'Please enter a valid URL for the photo',
        }),
    password: joi.string()
        .min(8)
        .max(30)
        .messages({
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password cannot be longer than 30 characters',
        }),

}).min(2); //campos a actualizar

export default userUpdateSchema;