async function getMain(req, res){
    res.json({
        message: "Hello from the main controller"
    });
}

module.exports = {
    getMain,
}