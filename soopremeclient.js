var Discord = require('discord.js');
var client = new Discord.Client();
var config = require("./config.json")
client.on("ready", client => {
    console.log("ready!");
})
client.on("message", async (message) => {
    const general = message.guild.channels.find("name", "general");
    if (message.channel != general) return;
    await console.log(`${message.author.username} : ${message}`)
})
client.login(config.token)