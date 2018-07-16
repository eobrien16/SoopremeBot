exports.run = async (message, client, args) => {
    const Discord = require('discord.js');
    const sqlite = require('sqlite');
    const sqlProm = sqlite.open('./mod/def/xp.sqlite', {Promise});
    const sql = await sqlProm;
    const topten = sql.get(`SELECT * FROM xp ORDER BY points DESC LIMIT 10;`);

    const embed = new Discord.RichEmbed()
        .setTitle(`Leaderboard`)
        .setAuthor(client.user.username, client.user.avatarURL)
        .setDescription(`Top 10 ranked users`)
        .setColor(0x00AE86);

        for(const data of topten) {
            embed.addField(client.users.get(data.user).tag, `${data.points} xp (level ${data.level})`);
        }
        return message.channel.send({embed});
}