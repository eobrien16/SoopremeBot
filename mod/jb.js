exports.run = async (message, client, args) => {
    const rp = require('request-promise');
    const jbid = require('./def/jbid.json');
    const id = jbid[`${args[0]}`]
    const opt = {
        "uri": `https://api.jbstatus.me/jailbreak/?jb=${id}`,
        "json": true,
        }
    await message.delete(0);
    await rp(opt)
        .then(r => {
            message.channel.send({embed: {
                color: 184123,
                title: `${r.name}`,
                fields: [{
                    name: `Supported Versions`,
                    value: `${r.start} - ${r.end}`
                },
                {
                    name: `URL`,
                    value: `${r.url}`
                },
                {
                    name: `Notes`,
                    value: `${r.notes}`
                }],
                thumbnail: {
                    url: `${r.icon}`
                }
            }})
        })
        .catch(err => {
            let list = Object.keys(jbid);
            var keke;
            for(i = 0; i < list.length; i++){
                keke += list[i]
            }
            message.channel.send({embed: {
                color: 102922,
                title: `List of possible jailbreaks:`,
                description: `\`\`\`\n${list}\`\`\``
            }})
        })
}