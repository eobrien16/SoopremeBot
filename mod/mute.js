exports.run = async (message, client, args) => {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    let role = message.guild.roles.find("name", "Muted");
    if(!message.member.roles.some(r=>["Admins", "Mods", "Bot Managers"].includes(r.name)) )
        return message.channel.send({embed: {
            color: 16711680,
            description: "***Your not a high enough rank you inbred piece of shit.***"
        }})
    if(!member)
        return message.channel.send({embed: {
            color: 16711680,
            description: "***Pick a member you fucking vegetable.***"
        }})
    if(!member.kickable)
        return message.channel.send({embed: {
            color: 16711680,
            description: "***Don't try to mute higher ranks fucknut.***"
        }})
    if(member.roles.has(role.id))
        return message.channel.send({embed: {
            color: 16711680,
            description: "***Member is already muted***"
        }})
    await message.delete(0);
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.addRole(role);
    return message.guild.channels.find("name", "public-logs").send({embed: {
        color: 1638655,
        title: "Member Muted",
        thumbnail: {
          url: member.avatarURL
        },
        fields: [{
            name: "Member",
            value: `${member}`
          },
          {
            name: "Moderator",
            value: `${message.author}`
          },
          {
            name: "Reason",
            value: reason
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "iOS Community ModUtils"
        }
      }}); 

    
}
exports.help = "mutes a user"
exports.usage = "!mute <user> [reason]"