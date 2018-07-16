exports.run = async (message, client, args) => {
    const sqlite = require('sqlite');
    const sqlProm = sqlite.open('./mod/def/xp.sqlite', {Promise});
    const sql = await sqlProm;
    await message.delete(0);
    sql.get(`SELECT * FROM xp WHERE userId ="${message.author.id}"`).then(row => {
        const lvl = row.level;
        const exp = row.points;
        return message.channel.send({embed: {
            color: 84745,
            fields: [{
                name: `Leveling Stats for ${message.author.username}`,
                value: `Currently Level ${lvl}`
            },
            {
                name: `Experience points`,
                value: `${exp}`
            }],
            thumbnail: {
                url: `${message.author.avatarURL}`
            }
        }})
    })
}