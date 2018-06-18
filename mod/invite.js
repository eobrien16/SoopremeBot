exports.run = async (message, client, args, member) => {
    await message.delete(0);
    return message.channel.send({embed: {
        color: 1851764,
        title: "Invite this bot to other servers!",
        description: "You can find this bots invite link [here](https://discordapp.com/oauth2/authorize?client_id=457996774808748043&permissions=8&scope=bot)"
    }});
}
