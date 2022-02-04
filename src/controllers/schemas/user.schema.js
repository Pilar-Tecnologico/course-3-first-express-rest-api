const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(3).max(30).required(),
    birthdate: Joi.date().greater('1-1-1900').required(),
    likes: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        description: Joi.string(),
    })).required(),

})

module.exports = schema;