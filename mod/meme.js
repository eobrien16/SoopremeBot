exports.run = async (message, client, args) => {
    const request = require('request-promise');
    const parsedr = request.defaults({ json: true });
    await message.delete(0);
    const r = require('./def/meme.json');
            let v = Math.floor(Math.random() * (100 - 0 + 1)) + 0
            let meme = r.data.children[v].data
            return message.channel.send({embed: {
                color: 128312,
                title: `${meme.title}`,
                image: {
                    url: `${meme.url}`
                }
            }})
}