const axios = require('axios').default;
const config = require('config');
const nasaConfig = config.get('services.nasa');
const Joi = require('joi');
const schema = require('./schemas/apod.schema');

async function getApod(req, res) {
    try {
        const {hostname, apikey} = nasaConfig;
        const query = req.query;
        Joi.assert(query, schema);
        const querystring = new URLSearchParams({api_key: apikey, ...query});
        console.log(querystring.toString());
        const response = await axios.get(`${hostname}/planetary/apod?${querystring.toString()}`);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = {
    getApod
}