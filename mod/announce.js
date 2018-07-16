exports.run = async (message, client, args) => {
    await message.delete(0);
    let role = message.guild.roles.find("name", `${args[0]}`)
                .catch(err => {
                    return message.channel.send({embed: {
                        color: 12312,
                        title: "Fail!",
                        description: "That role doesnt exist!"
                    }})
                })

    let channel = message.guild.channels.find("name", `${args[1]}`);
    let announcement = args.slice(2).join(" ")
                        .catch(err => {
                            return message.channel.send({embed: {
                                 color: 1029831,
                                 title: "Fail!",
                                 description: "you need to announce something!"
                            }})
                        })
    await role.edit({mentionable: true});
    await channel.send({embed: {
        color: 182312,
        author: {
            name: `${message.author}`,
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