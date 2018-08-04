exports.run = async (message, client, args, ) => {
    await message.delete(0);
    if (message.content.indexOf(' ') !== -1) {
      let user = message.mentions.users.first();
      let avtr = user.avatarURL;
      return message.channel.send({embed: {
        color: 1638655,
        image: {
          url: avtr
        }
      }})
    } else {
        let avtr = message.author.avatarURL;
        return message.channel.send({embed: {
          color: 1638655,
          image: {
            url: avtr
          }
        }})
    }
}
exports.help = "gets a users avatar"
exports.usage = "!avatar <user>"