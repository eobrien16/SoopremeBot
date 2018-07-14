exports.run = async (message) => {
    return message.channel.send({embed: {
        color: 1209321,
        title: `Donate!`,
        description: "if you like what Im doing with the bot, help me pay for hosting [here](https://paypal.me/eobsite1)!"
    }})
}