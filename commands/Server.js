module.exports = {
    name: 'server',
    description: 'server',
    execute(message, args) {
        const embed = new Discord.RichEmbed();
        embed.setTitle(message.guild.name);
        embed.setThumbnail(message.guild.iconURL)
        embed.setDescription(`Current Members: ${message.guild.memberCount}`);
        message.channel.send({embed});
    },
};