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