import joi from 'joi';

const companySignUpSchema = joi.object({
    name: joi.string()
        .required()
        .messages({
            'string.empty': 'Company name is required',
            'any.required': 'Company name is required'
        }),
    website: joi.string()
        .uri()
        .messages({
            'string.uri': 'Please enter a valid URL for the website',
        }),
    description: joi.string()
        .required()
        .messages({
            'string.empty': 'Company description is required',
            'any.required': 'Company description is required'
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

export default companySignUpSchema;