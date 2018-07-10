exports.run = async (message, args) => {
    await console.log(`reloading ${args[0]}...`);
    try {
    await delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (err) {
        return message.channel.send({embed: {
            color: 1056184,
            title: "Fail!",
            description: "That tag doesnt exist!"
        }});
    }
    await console.log(`reloaded ${args[0]}!`);
    return message.channel.send({embed: {
        color: 1076754,
        title: "Success!",
        description: `reloaded ${args[0]}!`
    }});
}