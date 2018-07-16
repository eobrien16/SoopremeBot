//Soopreme token: NDU3OTk2Nzc0ODA4NzQ4MDQz.DghOQA.__OCoXWKj2cRXUeIjzQ_41bIPXU
//iOS Community tests Token: NDYyMzcwNjU1Mjg3OTAyMjEw.Dhg4Bg.ixH4q2QBqFeOESb6xMp1-GUmdds
//iOS Community Token: NDU3NjQyODYyODM4OTM5NjUw.DiqHAA.QE6V5qjS_hNHPfkJqczm2YiLzME
const Discord = require('Discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const https = require('https');
const files = fs.readdirSync('./mod/');
const SQLite = require("better-sqlite3");
const sql = new SQLite("./mod/def/xp.sqlite");
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
    const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
    if (!table['count(*)']) {
        sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);").run();
        sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
        sql.pragma("synchronous = 1");
        sql.pragma("journal_mode = wal");
    }
    client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
    client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);")
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
    let score;
  if (message.guild) {
    score = client.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }
    score.points++;
    const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
    if(score.level < curLevel) {
      score.level++;
      message.author.send(`${message.author}, You've leveled up to **${curLevel}**!`);
    }
    client.setScore.run(score);
  }

})