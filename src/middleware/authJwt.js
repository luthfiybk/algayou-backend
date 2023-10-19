const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")
const db = require("../config/db.config")
const User = db.users

verifyToken = (req, res, next) => {
    let token = req.session.token

    if(!token){
        return res.status(403).send({
            message: "Mohon login terlebih dahulu!"
        })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.session.uuid = decoded.uuid
        next()
    })
}

isCustomer = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.session.uuid)
        const roles = await User.getRoles()

        for(let i = 0; i < roles.length; i++){
            if(roles[i].name === "customer"){
                return next()
            }
        }

        res.status(403).send({
            message: "Require Customer Role!"
        })
    } catch (error) {
        return res.status(500).send({ message: "Unable to validate user role"})
    }
}

isAdmin = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.session.uuid)
        const roles = await User.getRoles()

        for(let i = 0; i < roles.length; i++){
            if(roles[i].name === "admin"){
                return next()
            }
        }

        res.status(403).send({
            message: "Require Admin Role!"
        })
    } catch (error) {
        return res.status(500).send({ message: "Unable to validate user role"})
    }
}

isCompany = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.session.uuid)
        const roles = await User.getRoles()

        for(let i = 0; i < roles.length; i++){
            if(roles[i].name === "company"){
                return next()
            }
        }

        res.status(403).send({
            message: "Require Company Role!"
        })
    } catch (error) {
        return res.status(500).send({ message: "Unable to validate user role"})
    }
}

const authJwt = {
    verifyToken,
    isCustomer,
    isAdmin,
    isCompany
}

module.exports = authJwt