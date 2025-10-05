const express = require("express")
const Router = express.Router();

const telegram = require("../connections/Telegram")

Router.post("/newProject", (req, res) => {
    
    if(!req.body) return

    const { name, email, plan, type, tell } = req.body;

    if (!name || !email || !plan || !type || !tell) return res.send(400);

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