const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());

const db = require("./models")
// Routers

db.sequelize.sync().then( () => {
    app.listen("4000", () => {
        console.log("Server running on port 4000")
    })
})

