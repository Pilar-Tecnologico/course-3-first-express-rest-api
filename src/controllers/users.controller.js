

async function getUser(req, res){
    const user = process.env.MUNDO;
    res.status(200).json({
        message: `Hello ${user}`
    });
}

module.exports = {
    getUser,
}