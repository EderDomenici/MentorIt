const jwt = require('jsonwebtoken')

function auth(req, res, next){
    const authtoken = req.headers.authorization

    if(!authtoken){
        return res.status(401).send();

    }

    const [, token] = authtoken.split(" ");

    try{
        jwt.verify(token, process.env.SECRET)

        return next();

    } catch(err){
        return res.status(401).json({message:"Token invalido"})
    }

}

module.exports = auth