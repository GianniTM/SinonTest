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
        var user = message.mentions.users.first() || message.member.user;
        const member = message.guild.member.cache.get(user.id);
            embed.setTitle(`Userinfo ${user.username}`);
            embed.setThumbnail(user.displayAvatarURL);
            embed.addField(
                {
                    name:'**Tag**',
                    value:`${user.author.tag}`
                },
                {
                    name:'**Nickname**',
                    value: member.nickname || 'None'
                },
                {
                    name:'**Joined Server**',
                    value: new Date(member.joinedTimestamp)
                }
                
            );
            embed.setColor("37bceb");
            message.channel.send({embed});
    },
};