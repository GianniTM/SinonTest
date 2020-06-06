module.exports = {
    name: 'pause',
    description: 'pause!',
    execute(message, args) {
        var server = servers[message.guild.id];
        if (server.dispatcher.paused){
            message.channel.send('dispatched is already paused')
        }
        else{
            server.dispatcher.pause();
            message.react("⏸");
        }
    },
};