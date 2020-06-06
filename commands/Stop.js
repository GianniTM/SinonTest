module.exports = {
    name: 'stop',
    description: 'stop!',
    execute(message, args) {
        const channel = message.member.voiceChannel;
        if(channel){
            var server = servers[message.guild.id];
            server.queue = [];
            server.dispatcher.end();
            message.react("⏩");
        }
        else{
            message.channel.send('Join a voice channel Please!')
        }
    },
};