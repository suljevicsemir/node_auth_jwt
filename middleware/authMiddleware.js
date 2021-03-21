const jwt = require('jsonwebtoken');


const requireAuth = (req, res, next) => {

    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, 'this is a secret', (err, decodedToken) => {
            if(err) {
              console.log(err.message);
              res.redirect('/login');
            }
            console.log(decodedToken);
            next();
        });
    }
    else {
        res.redirect('/login');
    }


    next();
}


module.exports = {requireAuth};





