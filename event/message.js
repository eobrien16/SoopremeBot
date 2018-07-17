module.exports = async (client, message) => {
    const config = require("../mod/def/config.json")
    const SQLite = require("sqlite");
    const sqlProm = SQLite.open("./mod/def/xp.sqlite", {Promise})
    const sql = await sqlProm;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    sql.get(`SELECT * FROM scores WHERE user ="${message.author.id}"`).then(row => {
        if (!row) {
          sql.run("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (?, ?, ?, ?, ?)", [`${message.guild.id}-${message.author.id}`, message.author.id, message.guild.id, 1, 0]);
        } else {
          let curLevel = Math.floor(0.2 * Math.sqrt(row.points + 1));
          if (curLevel > row.level) {
            row.level = curLevel;
            sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE user = ${message.author.id}`);
            return message.author.send(`You are now level **${curLevel}**!`);
          }
          sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE id = ${message.guild.id}-${message.author.id}`);
        }
      }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER)").then(() => {
        sql.run("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (?, ?, ?, ?, ?)", [`${message.guild.id}-${message.author.id}`, message.author.id, message.guild.id, 1, 0]);
        });
      });
    if(message.content.indexOf(config.prefix) !== 0) return;
    try {
        let commander = require(`../mod/${command}.js`);
        return commander.run(message, client, args);
    } catch (err) {
        let commander = require(`../mod/error`);
        return commander.run(message, client, args);
    }
}