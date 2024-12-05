import joi from 'joi';

const authorUpdateSchema = joi.object({
    author: joi.string()
        .optional()
        .messages({
            'string.empty': 'Author ID cannot be empty if provided'
        }),
    name: joi.string()
        .optional()
        .messages({
            'string.empty': 'Name cannot be empty if provided'
        }),
    last_name: joi.string()
        .optional()
        .messages({
            'string.empty': 'Last name cannot be empty if provided'
        }),
    city: joi.string()
        .optional()
        .messages({
            'string.empty': 'City cannot be empty if provided'
        }),
    country: joi.string()
        .optional()
        .messages({
            'string.empty': 'Country cannot be empty if provided'
        }),
    date: joi.date()
        .optional()
        .messages({
            'date.base': 'Please provide a valid date'
        }),
    photo: joi.string()
        .uri()
        .optional()
        .messages({
            'string.uri': 'Please enter a valid URL for the photo',
        }),
}).min(1); // Cambié a min(1) para permitir actualizar al menos un campo

export default authorUpdateSchema;