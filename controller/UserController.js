const UserSchema = require('../model/UserSchema');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const registerUser = (request, response) => {

    bcrypt.hash(request.body.password, saltRounds, function (err, hash) {
        const user = new UserSchema({
            email: request.body.email,
            password: hash,
            fullName: request.body.fullName,
            avatar: request.body.avatar,
            redDate: request.body.redDate,
            activeState: request.body.activeState
        });

        user.save().then(savedResponse => {
            response.status(201).json(savedResponse);
        }).catch(error => {
            response.status(500).json(error);
        })
    });


}
const loginUser = (request, response) => {
    UserSchema.findOne({email: request.body.email}).then(resultData => {
        if (resultData) {
            console.log(resultData)
            bcrypt.compare(request.body.password, resultData.password, function (err, result) {
                if (err) {
                    console.log(err)
                    response.status(401).json({message: 'UnAuthorized!'});
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: resultData.email,
                            avatar: resultData.avatar,
                            fullName: resultData.fullName,
                        }
                        , process.env.PRIVATE_KEY);
                    response.status(200).json({message: 'logged!', token: token});
                } else {
                    response.status(401).json({message: 'UnAuthorized!'});
                }
            });

        } else {
            response.status(404).json({message: 'User Not Found!'});
        }
    }).catch(error => {
        response.status(500).json(error);
    })
}

module.exports = {
    registerUser, loginUser
}