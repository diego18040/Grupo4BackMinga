import joi from 'joi';

const authorUpdateSchema = joi.object({
    // ID OBLIGATORIO
    author: joi.string()
    .optional()
        .messages({
            'string.empty': 'Author ID is required',
            'any.required': 'Author ID is required'
        }),
    name: joi.string()
        .optional()
        .messages({
            'string.empty': 'Author name is required',
            'any.required': 'Author name is required'
        }),
    last_name: joi.string()
        .optional()
        .messages({
            'string.empty': 'Author last name is required',
            'any.required': 'Author last name is required'
        }),
    city: joi.string()
        .optional()
        .messages({
            'string.empty': 'Author city is required',
            'any.required': 'Author city is required'
        }),
    country: joi.string()
        .optional()
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
        .messages({
            'string.uri': 'Please enter a valid URL for the photo',
        }),

}).min(1); //campos a actualizar

export default authorUpdateSchema;