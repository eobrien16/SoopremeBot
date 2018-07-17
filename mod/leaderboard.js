exports.run = async (message, client, args) => {
    const Discord = require('discord.js'); 
    const sqlite = require('sqlite');
    const Type = require('type-of-is');
    const sqlProm = sqlite.open('./mod/def/xp.sqlite', {Promise});
    const sql = await sqlProm;
    await message.delete(0);
    sql.run(`SELECT * FROM scores WHERE guild = ${message.guild.id} ORDER BY points DESC LIMIT 10;`).each(row => {
      console.log(row.user);
      /*const embed = new Discord.RichEmbed()
        .setTitle("Leaderboard")
        .setAuthor(client.user.username, client.user.avatarURL)
        .setDescription("Our top 10 points leaders!")
        .setColor(0x00AE86);
      message.channel.send(row.user[0])
      for (i = 0; i < row.length; i++) {
        embed.addField(client.users.get(row[i].user).tag, `${row[i].points} points (level ${row[i].level})`);
      }
      message.channel.send({embed});*/
    });
}