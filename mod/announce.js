exports.run = async (message, client, args) => {
    await message.delete(0);
    let role = message.guild.roles.find("name", `${args[0]}`)
    let channel = message.guild.channels.find("name", `${args[1]}`);
    let announcement = args.slice(2).join(" ")
    await role.edit({mentionable: true});
    await channel.send({embed: {
        color: 182312,
        author: {
            name: `${message.author.username}`,
            icon_url: `${message.author.avatarURL}`
        },
        description: `${announcement}`
    }})
    await channel.send(`${role}`)
    await role.edit({mentionable: false});
    return message.author.send({embed: {
        color: 19231,
        title: "Success!",
        description: `I made your announcement! come check it out in ${channel}`
    }})
}