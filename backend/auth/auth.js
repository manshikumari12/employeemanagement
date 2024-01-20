const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
   const token=req.headers.authorization.split(' ')[1]
//    console.log(token)
    if(token){
        jwt.verify(token, 'yourSecretKey', function(err, decoded) {
            if(decoded){
            //  console.log(decoded)
             req.body.userid=decoded.userid
             next()
            }else{
                res.status(400).send({"msg":"Invalid Password"})
            }
          });
    }else{
        res.status(400).send({"msg":"Invalid Credentials"})
    }
};

module.exports = { authenticateToken };
