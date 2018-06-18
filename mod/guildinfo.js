exports.run = async (message, client, args) => {
    let member = message.author;
    await message.delete(0);
    await message.channel.send({embed: {
        color: 2981529,
        title: "Guild Info",
        fields: [{
            name: "Owner",
            value: `${message.guild.owner}`
        },
        {
            name: "Region",
            value: message.guild.region
        },
        {
            name: "Splash",
            value: `${message.guild.splash}`
        }]
    }});
}