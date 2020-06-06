module.exports = {
    name: 'send',
    description: 'send!',
    execute(message, args) {
        var mention = message.mentions.users.first();
        if (mention == null){
            message.channel.send('pls tag someone');
            return;
        }
        message.delete();
        mention.sendMessage (args);
    },
};