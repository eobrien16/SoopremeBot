exports.run = async (message, args) => {
    return message.channel.send({embed: {
        color: 198246,
        description: "If you are asking for help, please keep it in the help channels, <#457620444992765982>, <#464167831601152010> or <#464953132863193088>. "
    }})
}