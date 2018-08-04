exports.run = async (message, client, args) => {
    const request = require('request-promise');
    const parsedr = request.defaults({ json: true });
    await message.delete(0);
    const norris = "https://api.chucknorris.io/jokes/random";
    await parsedr(norris)
        .then(r => {
            const icon = r.icon_url
            const val = r.value
            return message.channel.send({embed: {
                color: 128312,
                title: "Chuck Norris Jokes",
                thumbnail: {
                    url: `${icon}`
                },
                description: `${val}`
            }})        })
}
exports.help = "gets a chuck norris joke"
exports.usage = "!norris"