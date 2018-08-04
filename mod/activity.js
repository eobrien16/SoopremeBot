exports.run = async (message, client, args) => {
    await message.delete(0);
    return client.user.setActivity(args.join(" "))
}
exports.help = "Sets the bots playing status"
exports.usage = "!activity [activity]"