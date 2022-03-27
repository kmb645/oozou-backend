const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());

const db = require("./models")
// Routers

const postRouter = require('./routes/Todos')
app.use("/todos", postRouter)
app.use("/todosStatus", postRouter)
app.use("/subtasksStatus", postRouter)


const subtasksRouter = require('./routes/Subtasks')
app.use("/subtasks", subtasksRouter)

db.sequelize.sync().then( () => {
    app.listen("4000", () => {
        console.log("Server running on port 4000")
    })
})

