const jwt = require("jsonwebtoken");
const config = require("config");

const verifyToken = token => {
    return new Promise((fnResolve, fnReject) => {
        jwt.verify(token, config.get("jwtSecret"), function(err, decoded) {
            if (err) {
                fnReject(err);
            } else {
                fnResolve(token);
            }
        });
    });
};

module.exports = verifyToken;
