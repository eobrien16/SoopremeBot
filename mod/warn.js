exports.run = async (message, client, args) => {
    await message.delete(0);
    let lvl1 = message.guild.roles.find("name", "Warning 1");
    let lvl2 = message.guild.roles.find("name", "Warning 2");
    let lvl3 = message.guild.roles.find("name", "Warning 3");
    let log = message.guild.channels.find("name", "public-logs");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    let reason = args.slice(1).join(" ")
    let autoreason3 = "Autoban, 3 warnings";
    if (member.roles.has(lvl1)) {
        await member.removeRole(lvl1);
        await member.addRole(lvl2);
        return log.send({embed: {
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
    } else if (member.roles.has(lvl2)) {
        await member.removeRole(lvl2);
        await member.addRole(lvl3);
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
          await member.ban(autoreason3);
          return log.send({embed: {
              color: 1638655,
              title: "Member Banned",
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
                  value: autoreason3
                }
              ],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "iOS Community ModUtils"
              }
            }});
    } else {
        await member.addRole(lvl1);
        return log.send({embed: {
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
}