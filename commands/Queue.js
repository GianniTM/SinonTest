module.exports = {
    name: 'queue',
    description: 'queue!',
    execute(message, args) {
        if (!servers[message.guild.id]) {

            servers[message.guild.id] = {queue: []}
        }
        var server = servers[message.guild.id];
        if(!server.queue[0]){
            const embed = new Discord.RichEmbed();
            embed.setAuthor("Queue:", message.author.displayAvatarURL);
            embed.setTitle("What are you looking at? There is nothing here!");
            message.channel.send({embed});
        }
        else{
            const embed = new Discord.RichEmbed();
            embed.setAuthor("Queue:", message.author.displayAvatarURL);
            for(song of server.queue){
                embed.addField(song.title, song.channelTitle)
            }
            message.channel.send({embed});
        }

    },
};