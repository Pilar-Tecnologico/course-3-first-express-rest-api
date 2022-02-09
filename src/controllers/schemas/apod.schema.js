const Joi = require('joi');

const querySchema = Joi.object({
    date: Joi.date(),
    start_date: Joi.date(),
    end_date: Joi.date(),
    count: Joi.number().integer(),
    thumbs: Joi.boolean(),
})

module.exports = querySchema;
