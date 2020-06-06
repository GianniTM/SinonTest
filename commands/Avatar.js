module.exports = {
    name: 'avatar',
    description: 'avatar',
    execute(message, args) {
        const embed = new Discord.RichEmbed();
        var mention = message.mentions.users.first();
        if (mention == null){
            embed.setTitle("Your Avatar");
            embed.setThumbnail(message.author.displayAvatarURL);
            embed.setColor("37bceb");
            message.channel.send({embed});
        }
        else{
            embed.setTitle(`${mention.username}'s avatar!`);
            embed.setThumbnail(mention.displayAvatarURL);
            embed.setColor("f7d456");
            message.channel.send({embed});
        }
    },
};