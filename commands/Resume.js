module.exports = {
    name: 'resume',
    description: 'resume!',
    execute(message, args) {
        var server = servers[message.guild.id];
        if (server.dispatcher.paused){
            server.dispatcher.resume();
            message.react("⏯")

        }
        else{
            message.channel.send('dispatched is not paused');
        }
    },
};