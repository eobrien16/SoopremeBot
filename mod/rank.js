exports.run = async (message, client, args) => {
    const sqlite = require('better-sqlite3');
    const sql = new sqlite('./mod/def/xp.sqlite');
    await message.delete(0);
    let exp = sql.prepare(`SELECT points FROM scores WHERE user ="${message.author.id}" AND guild = ${message.guild.id}`).get();
    let lvl = sql.prepare(`SELECT level FROM scores WHERE user ="${message.author.id}" AND guild = ${message.guild.id}`).get();
        return message.channel.send({embed: {
            color: 84745,
            fields: [{
                name: `Leveling Stats for ${message.author.username}`,
                value: `Currently Level ${lvl.level}`
            },
            {
                name: `Experience Points`,
                value: `${exp.points}`
            }],
            thumbnail: {
                url: `${message.author.avatarURL}`
            }
        }})
    }
