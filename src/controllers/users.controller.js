const userSchema = require('./schemas/user.schema');
const Joi = require('joi');

async function getUser(req, res){
    const user = process.env.MUNDO;
    res.status(200).json({
        message: `Hello ${user}`
    });
}

async function createUser(req, res){
    const data = req.body;
    try {
        Joi.assert(data, userSchema);
        res.json({
            message: 'everything ok',
        });
    } catch (err) {
        const error = new Error();
        Object.assign(error, {
            code: 'bad_request',
            message: err.details[0].message,
            severity: 'LOW',
        })
        res.status(400).json(error);
    }
    
    
}

module.exports = {
    getUser,
    createUser
}