const db = require("../config/db.config")
const Users = db.users
const { v4: uuidv4 } = require('uuid')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")
const Address = db.address
const Roles = db.roles
const Op = db.Sequelize.Op

exports.signUp = async (req, res) => {
    try {
        let users = await Users.create({
            uuid: uuidv4(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            birth_date: req.body.birth_date,
        })

        if(req.body.address) {
            let address = await Address.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.address
                    }
                }
            })
            const result = users.setAddress(address)
            if (result) res.send({ message: "User was registered successfully!"})
        }

        if(req.body.role) {
            let role = await Roles.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.role
                    }
                }
            })
            const result = users.setRoles(role)
            if (result) res.send({ message: "User was registered successfully!"})
        } else {
            const result = users.setRoles([1])
            if (result) res.send({ message: "User was registered successfully!"})
        }
    } catch (err) {
        res.status(500).send({ message: "Can't register"})
    }
}

exports.signIn = async (req, res) => {
    try {
        let users = await Users.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!users) res.status(404).send({ message: "User Not found."})

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            users.password
        )

        if (!passwordIsValid) res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
        })

        let token = jwt.sign({ uuid: users.uuid }, config.secret, {
            algorithm: "HS256",
            allowInsecureKeySizes: true,
            expiresIn: 86400 // 24 hours
        })

        req.session.token = token

        res.status(200).send({
            uuid: users.uuid,
            email: users.email,
            accessToken: token
        })
    } catch (error) {
        return res.status(500).send({ message: 'Failed to Sign In' })
    }
}

exports.signOut = async (req, res) => {
    try {
        req.session.destroy()
        res.status(200).send({ message: "Sign Out Successfully"})
    } catch (error) {
        return res.status(500).send({ message: 'Failed to Sign Out' })
    }
}