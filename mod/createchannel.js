exports.run = async (message, client, args) => {
    await message.delete(0);
    await message.guild.createChannel(args[0], 'text');
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