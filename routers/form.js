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

Router.post("/free", (req, res) => {
    if(!req.body) return

    const { name, mail, bussinessName, project, tel, website } = req.body;

    if (!name || !mail || !bussinessName || !project || !tel) return res.send(400);


    telegram.SendNewOffer
    fer({
        mail,
        name,
        tel,
        bussinessName,
        project,
        website
    })

    res.send({error: false})

})

module.exports = Router