exports.run = async (message, client, args) => {
    await message.delete(0);
    let log = message.guild.channels.find("name", "public-logs");
    let member = message.mentions.members.first() || message.guild.members.get(args[1]);
    let reason = args.slice(2).join(" ")
    let autoreason3 = "Autoban, 3 warnings";
    
    if(!reason) return message.channel.send({embed: {
      color: 12034,
      title: "Fail!",
      description: "Please specify a reason"
    }})
    if(args[0] > 0 && args[0] < 5) {
      let lvl = message.guild.roles.find("name", `Warning ${args[0]}`);
    } else {
      return message.channel.send({embed: {
        color: 1984712,
        title: "Fail!"
      }})
    }
    await member.addRole(lvl)
      .catch(err => {
        return message.channel.send({embed: {
          color: 231398,
          title: "Fail!",
          description: `couldnt add role because of: ${err}`
        }})
      })
      await log.send({embed: {
        color: 1638655,
        title: "Member Warned",
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
            name: "Warn Level",
            value: `${args[0]}`
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
    if(args[0] == 3){
      await member.kick("3 Warnings")
      return log.send({embed: {
        color: 1638655,
        title: "Member Kicked",
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
            value: "3 Warnings"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "iOS Community ModUtils"
        }
      }});
    }
    if(args[0] == 4){
      await member.ban("4 Warnings")
      return log.send({embed: {
        color: 1638655,
        title: "Member banned",
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
            value: "4 Warnings"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "iOS Community ModUtils"
        }
      }});
    }
     
}