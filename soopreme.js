//Soopreme token: NDU3OTk2Nzc0ODA4NzQ4MDQz.DghOQA.__OCoXWKj2cRXUeIjzQ_41bIPXU
//iOS Community tests Token: NDYyMzcwNjU1Mjg3OTAyMjEw.Dhg4Bg.ixH4q2QBqFeOESb6xMp1-GUmdds
//iOS Community Token: NDU3NjQyODYyODM4OTM5NjUw.DiqHAA.QE6V5qjS_hNHPfkJqczm2YiLzME
const Discord = require('Discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const https = require('https');
const files = fs.readdirSync('./mod/');
const sqlite = require("sqlite");
const sqlProm = sqlite.open("./mod/def/xp.sqlite", {Promise});
//loads all commands into cache so I dont have problems with it not finding commands
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
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
client.login(config.token);
//regular message event
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
//xp message event
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    const sql = await sqlProm;
    sql.get(`SELECT * FROM xp WHERE userId = "${message.author.id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO xp (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        } else {
            let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
            if (curLevel > row.level) {
                row.level = curLevel;
                sql.run(`UPDATE xp SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
                message.reply(`You have reached level **${curLevel}**! `);
            }
            sql.run(`UPDATE xp SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
        }
    }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS xp (userId TEXT, points INTEGER, level INTEGER)").then(() => {
            sql.run("INSERT INTO xp (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        });
    });

})