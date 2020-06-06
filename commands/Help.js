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
module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args) {
        const embed = new Discord.RichEmbed();
        embed.setTitle("**Functions**");
        embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
        embed.setDescription("Here you can see al the functions this bot has so far.");
        embed.addField(
            '**=q**', 'Gives you a random sinon quote!'
        );
        embed.addField(
            '**=p**','Plays a song from youtube for you. If there is already a song playing it will put them in the queue.'
        );
        embed.addField(
            "**=avatar (mentioned person)**",'Sends the avatar of the person you mentioned. If no one is mentioned it will send yours.'
        );
        embed.addField(
            '**=skip**','Skips the current song and starts the next song in the queue. If there is no next song she will leave the voice channel.'
        );
        embed.addField(
            '**=stop**','Queue gets emptied and bot leaves the Voice Channel'
        );
        embed.addField(
            '**=queue**','Queue will be shown current playing song will always be at te top.'
        );
        embed.addField(
            '**=server**','Gets information about how many members there are in the server.'
        );
        embed.addField(
            '**=u (mentioned person)**','The bot will say hello to the tagged user. This command was for testing mentions.'
        );
        embed.addField(
            '**=send (mentioned person) (message)**','sends a private message to the tagged user containing the private you put after you tagged that certain person. Do not abuse please.'
        );
        embed.addField(
            '**Gif your game**','Everytime someone posts a clip from gif your game the bot will react with a star.'
        );
        embed.addField(
            '**=rps (rock,paper or scissors)**' ,'Play a game of rock paper and scissors against the bot. Also available in NL!'
        );
        embed.addField(
            '**=roll (Max Number)**' ,'Rolls a dice! Funny ones to use are 420 and 69!'
        );
        embed.addField(
            '**=feedback**' ,'Feedback for bugs and ideas! If you dislike the bot do not put this in the feedback. This is for serious feedback. Use the /hate command to hate her ;P'
        );
        embed.addField(
            '**=rr**' ,'Russian Roulette, Just a fun game to play with friends. Winner will be shot! In progress: (Be aware winner will also be muted or put in the death Role if you are in the main Discord server.)'
        );
        embed.addField(
            '**=discord**' ,'Main discord server. Come join to hang out!'
        );
        embed.setFooter('Created By Xealius','https://images-ext-2.discordapp.net/external/koFm2tlX5t7FcS-qEPlTx5S3z-taeo1Ns2K-f2lw4H8/https/cdn.discordapp.com/avatars/271720534767697930/a_f37bd901007d84679f44c4690f9fa364.gif')
        message.channel.send({embed});
    },
};