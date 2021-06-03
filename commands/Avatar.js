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
            mention = message.author
        }
        var member = message.guild.member(mention);
            embed.setTitle(`Userinfo ${mention.username}`);
            embed.setThumbnail(mention.displayAvatarURL);
            embed.addField(
                '**Tag**',`${mention.tag}`
            );
            embed.addField(
                '**Nickname**', member.nickname || 'None'
             );
            embed.addField(
                '**Joined Server**',new Date(member.joinedTimestamp).toLocaleDateString()
            );
            embed.addField(
                '**Joined Discord**',new Date(mention.createdTimestamp).toLocaleDateString()
            );
            embed.addField(
                '**Highest Role**',member.roles.highest.name
            );
            embed.setColor("37bceb");
            message.channel.send({embed});
  /*  execute(message) {
        const embed = new Discord.RichEmbed();
        var mention = message.mentions.users.first();
        console.log(mention)
        console.log(mention.id)
        console.log(mention.username)
        const member = message.guild.member.cache.get(mention.id);
            embed.setTitle(`Userinfo ${mention.username}`);
            embed.setThumbnail(mention.displayAvatarURL);
            embed.addField(
                {
                    name:'**Tag**',
                    value:`${mention.author.tag}`
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
            */
    },
    
};