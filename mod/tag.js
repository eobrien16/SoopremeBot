exports.run = async (message, client, args) => {
    if(!args[0]) return;
    await message.delete(0);
    try {
        let tag = require(`./tag/${args[0]}.js`);
        return tag.run(message, args);
    } catch (err) {
        let tag = require(`./tag/error.js`);
        return tag.run(message);
    }
}
exports.help = "shows a tag"
exports.usage = "!tag <tag name>"