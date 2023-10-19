const db = require("../config/db.config")
const Users = db.users

checkDuplicateEmail = async (req, res, next) => {
    try {
        let email = await Users.findOne({
            where: {
                email: req.body.email
            }
        })

        if (email) {
            res.status(400).send({
                message: "Email sudah digunakan!"
            })
            return
        }

        next()
    } catch (error) {
        return res.status(500).send({ message: 'Email already registered' })
    }
} 

const verifySignUp = { checkDuplicateEmail }

module.exports = verifySignUp