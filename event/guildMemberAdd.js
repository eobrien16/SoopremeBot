module.exports = (client, member) => {
    const guild = member.guild;
    const wlcmJson = require('../mod/def/welcome.json');
    const welcomeRaw = wlcmJson[guild.id];
    const welcome = welcomeRaw.replace("<name>", member);
    member.send(welcome);
}