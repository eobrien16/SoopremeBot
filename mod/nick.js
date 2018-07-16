exports.run = async (message, client, args) => {
    await message.delete(0);
    let member = message.mentions.users.first();
    let av = member.avatarURL;
    let nick = args.slice(1).join(' ');
    if(!message.member.roles.some(r=>["Admin", "Community Team", "Mods"].includes(r.name))){
        return message.channel.send({embed: {
            color: 912832,
            title: "Fail!",
            description: "You arent a high enough rank"

        }})
    }
    if(!member) {
        return message.channel.send({embed: {
            color: 2193123,
            title: "Fail!",
            description: "No member specified!"
        }})
    }
    if(!nick) {
        return message.channel.send({embed: {
            color: 2193123,
            title: "Fail!",
            description: "No nickname specified!"
        }})
    }

}