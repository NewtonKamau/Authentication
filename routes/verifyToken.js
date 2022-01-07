const jwt = require('jsonwebtoken');
 

function auth (req, res,next) { 
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send('Access denied. No token provided.');
    } else {
        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
            next();
        } catch (ex) {
            res.status(400).send('Invalid token.');
        }
    }

}
module.exports = auth;