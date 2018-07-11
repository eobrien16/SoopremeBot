exports.run = async (message, client, args) => {
    rp = require('request-promise');
    const opt = {
        "uri": "https://api.jbstatus.me/jailbreak/?device",
        "json": true
        }
    await message.delete(0);
    await rp(opt)
        .then(r => {
            let dev = args[0]
            let no = args[1]
            let devno = args[0] + args[1]
            let device = r[`${devno}`]
            message.channel.send({embed: {
                color: 102931,
                title: `${device.model} -- ${device.name}`,
                thumbnail: {
                    url: `${device.img}`
                }
            }})
        })
}