const express = require("express")
const Router = express.Router();

const telegram = require("../connections/Telegram")

Router.post("/newProject", (req, res) => {
    
    console.log("aqui1")

    if(!req.body) return

    console.log("aqui2")


    const { name, email, plan, type, tell } = req.body;

    console.log("aqui3")


    if (!name || !email || !plan || !type || !tell) return res.send(400);

    console.log("aqui4")


    telegram.SendNewProject({
        email,
        name,
        tell,
        plan,
        type
    })

    res.send({error: false})
})

module.exports = Router