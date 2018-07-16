exports.run = async (message, client, args) => {
    await message.delete(0);
    let command = args[0];
    let commander = require(`./${command}`);
    
    await message.channel.send({embed: {
        color: 1089745,
        title: `${message.author}, I DMed you!`
    }});
    return commander.help(message);
}