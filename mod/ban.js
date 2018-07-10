exports.run = async (message, client, args) => {
    await message.delete(0);
    if(!message.member.roles.some(r=>["Admins", "Mods", "Bot Managers"].includes(r.name)) )
      return message.channel.send({embed: {
        color: 16711680,
        description: "***Your not a high enough rank you inbred piece of shit.***"
      }})
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.channel.send({embed: {
        color: 16711680,
        description: "***Pick a member you fucking vegetable.***"
      }})
    if(!member.kickable)
      return message.channel.send({embed: {
        color: 16711680,
        description: "***Don't try to kick higher ranks fucknut.***"
      }})
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
      let user = message.mentions.users.first();
      await member.send(`you were banned by ${message.author} for reason ${reason}`)
      await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      for (i = 0; i <= 1; i++){
        return message.guild.channels.find("name", "public-logs").send({embed: {
          color: 1638655,
          title: "Member Banned",
          thumbnail: {
            url: user.avatarURL
          },
          fields: [{
              name: "Member",
              value: `${user}`
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
    }}