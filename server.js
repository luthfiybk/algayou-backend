const express = require('express')
const cors = require('cors')
const cookieSession = require('cookie-session')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieSession({
    name: 'algayou-session',
    keys: ['COOKIE_SECRET'],
    httpOnly: true,
}))

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Algayou application.' })
})

const db = require('./src/config/db.config')
const Role = db.roles

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync DB')
    initial()
})

function initial() {
    Role.create({
        role_id: 1,
        role_name: 'customer'
    })

    Role.create({
        role_id: 2,
        role_name: 'admin'
    })

    Role.create({
        role_id: 3,
        role_name: 'company'
    })
}

require('./src/routes/auth.routes')(app)
require('./src/routes/customer.routes')(app)
require('./src/routes/admin.routes')(app)
require('./src/routes/company.routes')(app)

const port = 9000
app.listen(port, () => console.log(`Server running on port ${port} http://localhost:${port}`))