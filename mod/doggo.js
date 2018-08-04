exports.run = async (message, client, args) => {
    const request = require('request-promise');
    const parsedr = request.defaults({ json: true });
    await message.delete(0);
    const norris = "https://dog.ceo/api/breeds/image/random";
    await parsedr(norris)
        .then(r => {
            return message.channel.send({embed: {
                color: 128312,
                title: "Doggo pictures",
                image: {
                    url: `${r.message}`
                },
            }})        })
}
exports.help = "gets a picture of a doggo"
exports.usage = "!doggo"