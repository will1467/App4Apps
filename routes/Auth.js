const jwt = require('jsonwebtoken');

const superNotSecretKey = "muchsecretmanywow";

const verifyToken = (token) => {
    return new Promise((fnResolve, fnReject) => {
        jwt.verify(token, superNotSecretKey, function(err, decoded){
            if(err){
                fnReject(err);
            } else {
                fnResolve(token);
            }
        })
    })
}

module.exports = verifyToken;