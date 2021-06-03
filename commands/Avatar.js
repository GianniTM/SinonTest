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
    name: 'avatar',
    description: 'avatar',
    execute(message, args) {
        const embed = new Discord.RichEmbed();
        var mention = message.mentions.users.first();
        if (mention == null){
            embed.setTitle(`Userinfo ${message.author.username}`);
            embed.setThumbnail(message.author.displayAvatarURL);
            embed.addField(
                {
                    name:'**Tag**',
                    value:`${message.author.tag}`
                },
                {
                    name:'**Nickname**',
                    value: message.author.nickname || 'None'
                },
                {
                    name:'**Joined Server**',
                    value: new Date(message.joinedTimestamp)
                }
                
            );
            embed.setColor("37bceb");
            message.channel.send({embed});
        }
        else{
            embed.setTitle(`Userinfo ${mention.username}`);
            embed.setThumbnail(mention.displayAvatarURL);
            embed.setColor("f7d456");
            message.channel.send({embed});
        }
    },
};