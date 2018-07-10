//token: NDU3OTk2Nzc0ODA4NzQ4MDQz.DghOQA.__OCoXWKj2cRXUeIjzQ_41bIPXU
//iOS Community Token: NDYyMzcwNjU1Mjg3OTAyMjEw.Dhg4Bg.ixH4q2QBqFeOESb6xMp1-GUmdds
const Discord = require('Discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const https = require('https');
const files = fs.readdirSync('./mod/');
for (var i in files) {
try {
  var definition = require('./mod/' + files[i]);
  console.info('Module Loaded: ' + files[i]);
} catch (err) {
    console.error(err);
}
}
var file = fs.createWriteStream("./mod/def/meme.json");
var rq = https.get("https://www.reddit.com/r/dankmemes/top.json?limit=100", function(response) {
    response.pipe(file);
})

console.log(process.cwd())
client.on("ready", () => {
    client.user.setActivity(`with futurerestore`);
    console.info("ready!");
});

client.login(config.token);
client.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.content.indexOf(config.prefix) !== 0) return;

    try {
        let commander = require(`./mod/${command}.js`);
        return commander.run(message, client, args);
    } catch (err) {
        let commander = require(`./mod/error`);
        return commander.run(message, client, args);
    }
});