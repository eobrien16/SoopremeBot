exports.run = async (message, client, args) => {
    const Client = require('instagram-private-api').V1;
    const device = new Client.Device(`soopreme`);
    const storage = new Client.CookieFileStorage(__dirname + '/cookies/soopreme.json');
    await message.delete(0);
    let uname = args[0];
    let msg = args.slice(1).join(" ") + `~sent by ${message.author.username} courtesy of the iOS Community Bot`;
    await Client.Session.create(device, storage, 'iosdmbot', 'j7evd5gbE#')
    .then(session => {
        return [session, Client.Account.searchForUser(session, uname)]
    })
    .spread((session, account) => {
        new Client.Thread.configureText(session, account.id, msg).then(t => {rtrn();})
    })
    let rtrn = async () => {
        return message.channel.send({embed: {
            color: 1028412,
            title: "Success!",
            description: `sent your message to ${uname}!`
        }})
    }
}