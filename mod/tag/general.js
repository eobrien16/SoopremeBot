exports.run = async (message, args) => {
    return message.channel.send({embed: {
        color: 1873241,
        description: "Please keep all off topic conversation in <#457612697358434315>"
    }})
}