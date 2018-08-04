exports.run = async (message, client, args) => {
    return message.delete(0);
    const { text } = args;
    const deleteCount = parseInt(args[0], 10);
    if(!message.member.roles.some(r=>["Admins","Mods","Community Team"].includes(r.name)))
        return message.channel.send({embed: {
            color: 1241231,
            title: "Fail!",
            description: "You are not a high enough rank!"
        }})
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.channel.send({embed: {
            color: 882763,
            title: "Fail!",
            description: "Please select a number between 2 and 100"
        }})
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    return message.channel.bulkDelete(fetched)
        .catch(err => {
            message.channel.send({embed: {
                color: 87983,
                title: "Fail!",
                description: `Failed because of: ${err}`
            }})
        })
}
exports.help = "purges messages in a channel"
exports.usage = "!purge <number of messages>"