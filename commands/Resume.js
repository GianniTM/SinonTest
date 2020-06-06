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