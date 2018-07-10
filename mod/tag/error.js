exports.run = async (message) => {
    return message.channel.send({embed: {
        color: 10247123,
        title: `Fail!`,
        description: `That tag doesnt exist!`
    }});
}