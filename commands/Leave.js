module.exports = {
    name: 'leave',
    description: 'leave!',
    execute(message, args) {
        if (message.member.voiceChannel) {
            if(message.guild.voiceConnection) {
                message.member.voiceChannel.leave()
                message.react('👋');
            }
            else{
                message.channel.send("I'm not in a VoiceChannel!")
            }
        }
        else {
            message.channel.send("You are not in a VoiceChannel!");
        }
    },
};