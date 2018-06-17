Discord = require('Discord.js');
client = new Discord.Client();
config = require('./config.json');
client.on("ready", () => {
    client.user.setActivity("with my dick.");
    console.log("Ready to yiff some dicks.");
});
client.login(config.token);
client.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.content.indexOf(config.prefix) !== 0) return;

    try {
        let commander = require(`./mod/${command}`);
        return commander.run(message, client, args);
    } catch (err) {
        let commander = require(`./mod/error`);
        return commander.run(message, client, args);
    }
});