exports.run = async (message, client, args) => {
    const SQLite = require('sqlite');
    const sqlProm = SQLite.open('./mod/def/xp.sqlite', {Promise})
    const sql = await sqlProm; 
    await message.delete(0);
    const user = message.mentions.users.first();
    if (!user) {
        sql.get(`SELECT * FROM scores WHERE user ="${message.author.id}"`).then(row => {
            return message.channel.send({embed: {
                color: 84745,
                fields: [{
                    name: `Leveling Stats for ${message.author.username}`,
                    value: `Currently Level ${row.level}`
                },
                {
                    name: `Experience Points`,
                    value: `${row.points}`
                }],
                thumbnail: {
                    url: `${message.author.avatarURL}`
                }
            }})
        });
      } else {
        sql.get(`SELECT * FROM scores WHERE user ="${user.id}"`).then(row => {
            const user = message.mentions.users.first();
            return message.channel.send({embed: {
                color: 84745,
                fields: [{
                    name: `Leveling Stats for ${user.username}`,
                    value: `Currently Level ${row.level}`
                },
                {
                    name: `Experience Points`,
                    value: `${row.points}`
                }],
                thumbnail: {
                    url: `${user.avatarURL}`
                }
            }})
        });
      }
   
    }
