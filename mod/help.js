const Discord = require('discord.js');
const fs = require('fs');
exports.run = async (message, client, args) => {
    await message.delete(0);
    const files = fs.readdirSync('./mod');
    const embed = new Discord.RichEmbed();
    for (var i in files) {
        var nme = files[i].split(".")[0];
        var usg = require('./' + files[i]);
        embed.addField(nme, `${usg.help} -- \`\`\`${usg.usage}\`\`\``)
    }
    return message.channel.send({embed})
}
exports.help = "Gets info on commands"
exports.usage = "!help <command>"