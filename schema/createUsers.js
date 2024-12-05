import joi from 'joi';

const userSignUpSchema = joi.object({
        email: joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Please enter a valid email',
        }),

    password: joi.string()
        .min(8)
        .max(30)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password cannot be longer than 30 characters',
        }),

    photo: joi.string()
        .uri()
        .required()
        .messages({
            'string.empty': 'Photo URL is required',
            'string.uri': 'Please enter a valid URL for the photo',
        }),
});

export default userSignUpSchema;