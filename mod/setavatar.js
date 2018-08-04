exports.run = async (message, client, args) => {
    const config = require('./def/config.json')
    await message.delete(0);
    if(!message.member.roles.some(r=>[config.adminRole, config.modRole].includes(r.name)) ){
        return message.author.send({embed: {
            color: 182347,
            title: "Fail!",
            description: "You arent a high enough rank for this command!"
        }})
    }
    if(!args[0]) return message.author.send({embed: {
        color: 182347,
        title: "Fail!",
        description: "You did not specify a new profile picture!"
    }})
    await client.user.setAvatar(args[0]);
    return message.channel.send({embed: {
        color: 1029471,
        title: "Success!",
        description: "I changed my profile picture!"
    }})
}
exports.help = "changes the bots avatar"
exports.usage = "!setavatar <url>"