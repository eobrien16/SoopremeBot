exports.run = async (message, client, args) => {
    const rp = require('request-promise');
    const options = {
        "uri": `https://api.ipsw.me/v4/device/${args[0]}?type=ipsw`,
        "json": true,
        "headers": {
            "User-Agent": "iOS Community Discord Bot",
            "Accept": "application/json"
        }
    }
    await message.delete(0);
    await rp(options)
        .then(r => {
            let fw = "";
            for(i = 0; i < r.firmwares.length; i++){
                if (r.firmwares[i].signed == true) {
                    fw += `${r.firmwares[i].version}  --  download ` + "[here](" + r.firmwares[i].url + ")\n";
                }
            }
            message.channel.send({embed: {
                color: 128312,
                title: `${r.name} -- ${r.identifier}`,
                fields: [{
                    name: `Board config`,
                    value: `${r.boardconfig}`
                },
                {
                    name: `signed firmwares`,
                    value: `${fw}`
                }]
            }})        })
        .catch(err => {
            message.channel.send({embed: {
                color: 102922,
                title: `Fail!`,
                description: `The specified device does not exist!`
            }})
        })
}