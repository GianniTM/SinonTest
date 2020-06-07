// MAKE VARIABLES OF IMPORTED JS FILES START //
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { ErelaClient } = require('erela.js')
const YTDL = require('ytdl-core');
const { stripIndents } = require("common-tags")
var search = require('youtube-search');
var opts = {
    maxResults: 10,
    key: process.env.YT_TOKEN
};
const YouTube = require("discord-youtube-api");
const youtube = new YouTube(process.env.YT_TOKEN);
module.exports = {
    name: 'p',
    description: 'p!',
    execute(message, args) {
        async function PlayAll(mentionMessage) {
            if (mentionMessage.startsWith("https://www.youtube.com/watch?")){
                var video = await youtube.getVideo(mentionMessage);
            }
            else if(mentionMessage.startsWith("https://www.youtube.com/playlist?")){
                const videoArray1 = await youtube.getPlaylist(mentionMessage);
                console.log(videoArray1.items);
                return;
            }
            else{
                var video = await youtube.searchVideos(mentionMessage);
            }

            message.member.voiceChannel.join().then(connection =>{
                mentionMessage = video;
                const title = video.title;
                const embed = new Discord.RichEmbed();
                embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
                embed.setDescription(title);

                message.channel.send({embed}).then(m => {
                    server.dispatcher.on("end",function () {
                        m.delete()
                    })
                })
                server.queue.push(mentionMessage);
                Play(connection, message);

            })
        }
        async function QueueAll(mentionMessage) {

            if (mentionMessage.startsWith("https://www.youtube.com/watch?")){
                var video = await youtube.getVideo(mentionMessage);
            }
            else{
                var video = await youtube.searchVideos(mentionMessage);
            }
            message.member.voiceChannel.join().then(connection =>{
                mentionMessage = video;
                const title = video.title;
                const embed = new Discord.RichEmbed();
                embed.setAuthor("Queued:", message.author.displayAvatarURL);
                embed.setDescription(title);
                message.channel.send({embed}).then(m => {
                    server.dispatcher.on("end",function () {
                        m.delete()
                    })
                })
                server.queue.push(mentionMessage);

            })
        }
        function Play(connection, message)
        {
            var server = servers[message.guild.id];
            server.dispatcher = connection.playStream(YTDL(server.queue[0].url, {filter: "audioonly"}));
            server.dispatcher.on("end",function () {
                server.queue.shift();
                if (server.queue[0]){
                    const title = server.queue[0].title;
                    const embed = new Discord.RichEmbed();
                    embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
                    embed.setDescription(title)
                    message.channel.send({embed}).then(m => {
                        server.dispatcher.on("end",function () {
                            m.delete();
                        })
                    })
                    Play(connection, message);
                }
                else{

                }
            });

        }
        const channel = message.member.voiceChannel;
        if(channel){
            if(!message.guild.voiceConnection){
                if (message.content.length <= 3){
                    message.channel.send('Pleas provide a link or searchterm!');
                }
                else{
                    if (!servers[message.guild.id]){

                        servers[message.guild.id] = {queue: []}
                    }
                    var server = servers[message.guild.id];
                    mentionMessage = message.content.slice(3);
                    PlayAll(mentionMessage);





                }


            }
            else{
                if (message.content.length <= 3){
                    message.channel.send('Pleas provide a link or searchterm!');
                }
                else {
                    if (!servers[message.guild.id]) {

                        servers[message.guild.id] = {queue: []}
                    }

                    var server = servers[message.guild.id];
                    var mentionMessage = message.content.slice(3);
                    if (!server.queue[0]) {
                        PlayAll(mentionMessage);
                    } else {
                        QueueAll(mentionMessage)

                    }
                }


            }

        }
        else{
            message.reply('Join a voice channel Please!')
        }
    },
};