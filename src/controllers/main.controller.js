const axios = require('axios').default;

async function getAxios(req, res){

    try {
        const params = new URLSearchParams(req.query);
        console.log(params.toString());
        const response = await (await axios.get('http://localhost:3000/')).data;
        res.json(params.toString());
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

async function getMain(req, res){
    res.json({hola: 'mundo'});
}

module.exports = {
    getMain,
    getAxios
}