exports.run = async (message, client, args) => {
    await message.delete(0);
    await message.channel.send({embed: {
        color: 1967275,
        title: "Error!",
        description: "The command you provided doesnt exist!"
    }});
}