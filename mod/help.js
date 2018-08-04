const Discord = require('discord.js');
const fs = require('fs');
exports.run = async (message, client, args) => {
    await message.delete(0);
    const files = fs.readdirSync('./mod');
    var elp = "";
    for (var i in files) {
        var nme = files[i].split(".")[0];
        try {
        	var usg = require('./' + files[i]);
        } catch (err) {
            continue;
        }
        elp += `***${nme}***\n`
	elp +=  `${usg.help}\n\`\`\`${usg.usage}\`\`\`\n`
    }
    return message.channel.send({embed: {
		color: 124123,
		title: "***Help***",
		description: elp
	}})
}
exports.help = "Gets info on commands"
exports.usage = "!help <command>"
