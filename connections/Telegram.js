const apiKey = "7863865541:AAFLd6J6sY3HtHNHGocuuMe0jQFlQ4MAteQ"

const telegramBot = require("node-telegram-bot-api")

const staffs = [
    "8052575762", //Raphael
]

const SendNewProject = ({email, name, tell, plan, type }) => {

    console.log("aqui5")
    const Bot = new telegramBot(apiKey, {
        polling: true, // or webhook: { ... }
        request: {
            agentOptions: {
                family: 4 // Force IPv4
            }
        }})


    const msg = `📩 Novo formulário recebido!

👤 Nome: ${name}
📧 E-mail: ${email}
📱 Telefone: ${tell}
💼 Tipo de plano: ${plan}
🏢 Tipo de cliente: ${type} (Pessoa Física ou Empresa)
` 

    console.log(msg);
    

    staffs.forEach(userId => {
        try {
            Bot.sendMessage(userId, msg)
        } catch (err) {
            console.log(err)
        }
    })

}

module.exports = {
    SendNewProject
}