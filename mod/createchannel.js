exports.run = async (message, client, args) => {
    if (!args[0] || !args[1]) return message.channel.send({embed: {
        color: 1239847,
        title: "fail!",
        description: "Not enough arguments!"
    }})
    await message.delete(0);
    await message.guild.createChannel(name, args[0]);
    await message.guild.channels.find("name", args[0]).send({embed: {
        color: 10571883,
        title: "Welcome!",
        description: `welcome to ${message.guild.channels.find("name", args[0])} created by ${message.author}!`
    }});
    return message.channel.send({embed: {
        color: 1068934,
        title: "Success!",
        description: `I made your channel! come check it out here: ${message.guild.channels.find("name", args[0])}`
    }})
}
exports.help = "Creates a channel"
exports.usage = "!createchannel <channel name>"