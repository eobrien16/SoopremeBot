exports.run = async (message, client, args) => {
    await message.delete(0);
    return message.channel.send({embed: {
        color: 1819554,
        title: "WIP",
        description: "GTFO"
    }});
}
