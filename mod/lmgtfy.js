exports.run = async (message, client, args) => {
    await message.delete(0);
    let cntnt = args.slice(0).join(' ');
    let rplc = cntnt.replace(/ /g, "+");
    return message.channel.send("http://lmgtfy.com/?q=" + rplc);
}