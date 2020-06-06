module.exports = {
    name: 'skip',
    description: 'skip!',
    execute(message, args) {
        var server = servers[message.guild.id];
        if (!server || !server.queue[0]) {
            message.channel.send("No song's currently playing")
        } else {
            server.dispatcher.end();
            message.react("▶");
        }
    },
};