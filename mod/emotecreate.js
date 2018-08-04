exports.run = async (message, client, args) => {
    await message.delete(0);
    await message.guild.createEmoji(args[1], args[0]);
    return message.channel.send({embed: {
        color: 1046737,
        title: "Emote Created!",
        description: `Created a new emote! try it out by typing \`\`\`:${args[0]}:\`\`\``
    }});
}
exports.help = "creates an emote"
exports.usage = "!emotecreate <name> <url>"