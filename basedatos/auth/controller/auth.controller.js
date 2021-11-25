const bcrypt = require('bcrypt-nodejs'),
User = require('../models/user'),
Session = require('../models/session'),
jwt = require('jsonwebtoken'),
config = require("../config/config")

async function signIn(req, res)
{   
    //console.log(req.body)
    const user = await User.findOne({ user : req.body.user })//.select('-password')
    if(user)
    {
      bcrypt.genSalt(10, (err , salt) => 
      {
            if(err) return next(err)
            bcrypt.hash("admin",salt, null, (err, hash) => 
            {
                if(err) return next(err)
                bcrypt.compare(req.body.password, user.password , function(err, isMatch) 
                {
                    if(isMatch) //true
                    {
                        jwt.sign({ user }, config.SECRET_TOKEN , { expiresIn: '30s' }, (err, token) =>{
                          if(err)
                            res.sendStatus(403);
                          else{
                            saveSession(req.body.session)
                            res.json({
                                message: 'Has iniciado sesión',
                                token,
                                status:true
                            })
                          }
                        });
                    }
                    else
                     res.json({ message: 'El usuario que está intentando ingresar no existe en el sistema.' , status : false })
                })
            })
        })
    }
}


async function isLogged(req, res, next)
{
  if(req.params.token){
    jwt.verify(req.params.token, config.SECRET_TOKEN, (err, data) =>{
      if(err){
        res.json({ status : false })
        //res.sendStatus(403);
      }
      else{
          res.json({
              status : true,
              msg: "Te has logueado..", 
              data
          });
          res.json({ status : true })
      }
    });
  }
}

async function saveSession(data){
  console.log("data "+ data )
  const newSesion = new Session({
        ip:data.ip,
        device:data.device,
        userID:data.userID,
        continente:data.continente,
        country:data.country,
        os:data.os 
  })
  await newSesion.save()
}
/*

async function refreshToken(req, res, next)
{
  const refreshToken = jwt.sign(req.body, config.SECRET_TOKEN, { expiresIn: '1h'})
  const response = {
      "status": "Logged in",
      "refreshToken": refreshToken
  }
  tokenList[refreshToken] = response;
  res.status(200).json(response);
}
*/
module.exports = 
{
    signIn, 
    isLogged
}