const express = require('express')
const app = express()

const port = 9000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`[server] listening at http://localhost:${port}`)
})