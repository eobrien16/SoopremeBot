exports.run = async (message, client, args) => {
    const Discord = require('discord.js');
    const sqlite = require('better-sqlite3');
    const sql = new sqlite('./mod/def/xp.sqlite');
    await message.delete(0);
    const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);
      const embed = new Discord.RichEmbed()
        .setTitle("Leaderboard")
        .setAuthor(client.user.username, client.user.avatarURL)
        .setDescription("Our top 10 points leaders!")
        .setColor(0x00AE86);
      for(const data of top10) {
        embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
      }
      return message.channel.send({embed});
}