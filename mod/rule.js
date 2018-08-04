exports.run = async (message, client, args) => {
    await message.delete(0);
    const rules = require('./def/rules.json');
    if (!args[0]){
        for(i = 0; i < rules.list.length; i++){
            await message.channel.send({embed: {
                color: 1022841,
                title: `Rule #${i + 1}`,
                description: `${rules.list[i]}`
            }})
        }
    } else{
    try {
        let no = args[0] - 1
        let rule = rules.list[no]
        return message.channel.send({embed: {
            color: 16772105,
            title: `Rule #${args[0]}`,
            description: `${rule}`
        }})
    } catch(err) {
        return message.channel.send({embed: {
            color: 120321,
            title: "Fail!",
            description: "Incorrect arguments!"
        }})
    }
}
}
exports.help = "shows rules"
exports.usage = "!rule <number>"