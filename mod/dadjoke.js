exports.run = async (message, client, args) => {
    const rp = require('request-promise');
    const options = {
        "uri": "https://icanhazdadjoke.com/",
        "json": true,
        "headers": {
            "Accept": "application/json",
            "User-Agent": "iOS Community discord bot"
        }
    }
    const thumb = "https://vignette.wikia.nocookie.net/alanwake/images/c/c0/LOL_FACE.png"
    await message.delete(0);
    await rp(options)
        .then(r => {
            message.channel.send({embed: {
                color: 128312,
                title: "Dad Jokes",
                thumbnail: {
                    url: `${thumb}`
                },
                description: `${r.joke}`
            }})        })
}