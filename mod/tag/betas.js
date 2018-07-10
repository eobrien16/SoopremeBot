exports.run = async (message, args) => {
    return message.channel.send({embed: {
        color: 1092802,
        title: "Beta profiles",
        description: "get beta profiles [here](https://iosbetas.me/)"
    }})
}