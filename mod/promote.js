exports.run = async (message, client, args) => {
    await message.delete(0);
    let roleName = args[1];
    let role = message.guild.roles.find("name", roleName);
    let member = message.mentions.members.first();
    await member.addRole(role);
    return message.channel.send({embed: {
        color: 01357465,
        title: "Role Added!",
        descriptions: `${member} got role ${roleName}`
    }});
}