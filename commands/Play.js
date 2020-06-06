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
        function Play(connection, message)
        {
            var server = servers[message.guild.id];
            server.dispatcher = connection.playStream(YTDL(server.queue[0].url, {filter: "audioonly"}));
            server.dispatcher.on("end",function () {
                server.queue.shift();
                if (server.queue[0]){
                    const title = server.queue[0].title;
                    const embed = new Discord.RichEmbed();
                    embed.setAuthor("Now Playing:", "https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
                    embed.setTitle(title)
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
                    async function testAll(mentionMessage) {
                        const video = await youtube.searchVideos(mentionMessage)
                        console.log(video);
                        return(video);
                    }

                    message.member.voiceChannel.join().then(connection =>{
                            video = testAll(mentionMessage);
                            mentionMessage = video;
                            const title = video.title;
                            const embed = new Discord.RichEmbed();
                            embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
                            embed.setTitle(title);
                            message.channel.send({embed}).then(m => {
                                server.dispatcher.on("end",function () {
                                    m.delete()
                                })
                            })
                            server.queue.push(mentionMessage);
                            Play(connection, message);

                    })


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
                        message.member.voiceChannel.join().then(connection => {

                            search(mentionMessage, opts, function (err, results) {

                                if (err) return console.log(err);
                                var mentionMessage = results[0];
                                const title = results[0].title;
                                const embed = new Discord.RichEmbed();
                                embed.setAuthor("Now Playing:","https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
                                embed.setTitle(title);
                                message.channel.send({embed}).then(m => {
                                    server.dispatcher.on("end", function () {
                                        m.delete()
                                    })
                                })
                                server.queue.push(mentionMessage);
                                Play(connection, message);
                            });
                        })
                    } else {

                        search(mentionMessage, opts, function (err, results) {
                            if (err) return console.log(err);
                            var mentionMessage = results[0];
                            const title = results[0].title;
                            const embed = new Discord.RichEmbed();
                            embed.setAuthor("Queued:", message.author.displayAvatarURL);
                            embed.setTitle(title);
                            message.channel.send({embed}).then(m => {
                                server.dispatcher.on("end", function () {
                                    m.delete()
                                })
                            })
                            server.queue.push(mentionMessage);

                        });
                    }
                }


            }

        }
        else{
            message.reply('Join a voice channel Please!')
        }
    },
};