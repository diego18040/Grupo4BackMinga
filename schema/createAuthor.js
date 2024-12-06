import joi from 'joi';

const authorSignUpSchema = joi.object({
    name: joi.string()
        .required()
        .messages({
            'string.empty': 'Author name is required',
            'any.required': 'Author name is required'
        }),
    last_name: joi.string()
        .messages({
            'string.empty': 'Author last name is required',
            'any.required': 'Author last name is required'
        }),
    city: joi.string()
        .required()
        .messages({
            'string.empty': 'Author city is required',
            'any.required': 'Author city is required'
        }),
    country: joi.string()
        .required()
        .messages({
            'string.empty': 'Author country is required',
            'any.required': 'Author country is required'
        }),
    date: joi.date()
        .messages({
            'date.empty': 'Author date is required',
            'any.required': 'Author date is required'
        }),
    photo: joi.string()
        .uri()
        .required()
        .messages({
            'string.empty': 'Photo URL is required',
            'string.uri': 'Please enter a valid URL for the photo',
        }),
        user_id: joi.string()
        .required()
        .messages({
            'string.empty': 'User ID is required',
            'any.required': 'User ID is required'
        }),
}); 

export default authorSignUpSchema;