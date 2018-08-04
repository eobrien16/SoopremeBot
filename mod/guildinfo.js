exports.run = async (message, client, args) => {
    let member = message.author;
    await message.delete(0);
    await message.channel.send({embed: {
        color: 2981529,
        title: `guild info for ${message.guild.name}`,
        image: {
            url: `${message.guild.iconURL}`
        },
        fields: [{
            name: "Owner",
            value: `${message.guild.owner}`
        },
        {
            name: "Region",
            value: message.guild.region
        },
        {
            name: "Members",
            value: `${message.guild.memberCount}`
        }]
    }});
}
exports.help = "get some info about the guild"
exports.usage = "!guildinfo"