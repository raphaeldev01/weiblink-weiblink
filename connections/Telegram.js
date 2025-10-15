// const apiKey = "8448126237:AAEtF-zDqaknVPBpIaWheMzZfDip0Perq_0" //DEV
const apiKey = "7863865541:AAFLd6J6sY3HtHNHGocuuMe0jQFlQ4MAteQ" //REAL

const telegramBot = require("node-telegram-bot-api")

const Bot = new telegramBot(apiKey, {
    polling: true, // or webhook: { ... }
    request: {
        agentOptions: {
            family: 4 // Force IPv4
        }
    }
})

const staffs = [
    "8052575762", //Raphael
]

const SendNewProject = ({ email, name, tell, plan, type }) => {
    const msg = `📩 Novo formulário recebido!

👤 Nome: ${name}
📧 E-mail: ${email}
📱 Telefone: ${tell}
💼 Tipo de plano: ${plan}
🏢 Tipo de cliente: ${type} (Pessoa Física ou Empresa)

📱: https://wa.me/55${tell.replace("(", "").replace(") ", "")}
`

    staffs.forEach(userId => {
        try {
            Bot.sendMessage(userId, msg)
        } catch (err) {
            console.log(err)
        }
    })

}

const SendNewOffer = ({ mail, name, tel, bussinessName, project, website }) => {
    const msg = `💸💸💸💸💸💸💸💸💸💸💸

Novo formulario recebido pela campanha de site gratis!

👤 Nome: ${name}
💼 Nome da empresa: ${bussinessName}
📧 E-mail: ${mail}
📱 Telefone: ${tel} 

${website ? `🌐 Website: ${website}` : ""}

📜 Bio: ${project}

📱: https://wa.me/55${tel.replace("(", "").replace(") ", "")}

💸💸💸💸💸💸💸💸💸💸💸
`

    staffs.forEach(userId => {
        try {
            Bot.sendMessage(userId, msg)
        } catch (err) {
            console.log(err)
        }
    })

}

module.exports = {
    SendNewProject,
    SendNewOffer
}