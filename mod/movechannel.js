exports.run = async (message, client, args) => {
    await message.delete(0);
    if (!args[0]) return message.channel.send({embed: {
        color: 1239847,
        title: "fail!",
        description: "Not enough arguments!"
    }})
    await message.guild.setChannelPosition(message.channel, args[0])
        .catch(console.error);
    return message.channel.send({embed: {
        color: 1239847,
        title: "Success!",
        description: "I moved your channel!"
    }})
}