// MAKE VARIABLES OF IMPORTED JS FILES START //
const Discord = require('discord.js');
const client = new Discord.Client();
const { ErelaClient } = require('erela.js')
const YTDL = require('ytdl-core');
const { stripIndents } = require("common-tags")
var search = require('youtube-search');
var counter = 1;
var opts = {
    maxResults: 10,
    key: process.env.YT_TOKEN
};
// MAKE VARIABLES OF IMPORTED JS FILES END //
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// PREFIX START //
const prefix = "=";
global.servers = {};
// PREFIX END //
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// HELP START //
function Help(message)
{
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
}
// HELP END //
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// QUOTE START //
function Quote(message)
{
    var i = Math.floor(Math.random() * 15) + 1;
    var randomImg = "Images/sinon" + i + ".jpg"
    message.channel.send({files: [randomImg]});
}
// QUOTE END //
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// AVATAR START //
function Avatar(message)
{
    const embed = new Discord.RichEmbed();
    var mention = message.mentions.users.first();
    if (mention == null){
        embed.setTitle("Your Avatar");
        embed.setThumbnail(message.author.displayAvatarURL);
        embed.setColor("37bceb");
        message.channel.send({embed});
    }
    else{
        embed.setTitle(`${mention.username}'s avatar!`);
        embed.setThumbnail(mention.displayAvatarURL);
        embed.setColor("f7d456");
        message.channel.send({embed});
    }
}
// AVATAR END //
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SERVER START //
function Server(message)
{
    const embed = new Discord.RichEmbed();
    embed.setTitle(message.guild.name);
    embed.setThumbnail(message.guild.iconURL)
    embed.setDescription(`Current Members: ${message.guild.memberCount}`);
    message.channel.send({embed});
}
// SERVER END //
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// MENTION TEST START //
function MentionTest(message)
{
    var mention = message.mentions.users.first();
    if (mention == null){
        message.channel.send('pls tag someone');
        return;
    }
    message.channel.send(`Hello ${mention} :D`);
}
// MENTION TEST END //
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SEND PRIVATE MSG START //
function SendPrivate(message)
{
    var mention = message.mentions.users.first();
    if (mention == null){
        message.channel.send('pls tag someone');
        return;
    }
    message.delete();
    mentionMessage = message.content.slice(6);
    mention.sendMessage (mentionMessage);
}
// SEND PRIVATE MSG END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// ROCK PAPER SCISSORS START//
function RPS(message)
{
    var messages = message.content.slice(5).toLowerCase();
    var i = Math.floor(Math.random() * 3) ;
    var listEN = [
        'rock' ,
        'paper',
        'scissors'
    ];
    var listNL = [
        'steen',
        'papier',
        'schaar'
    ];
    var choiceEN = listEN[i];
    var choiceNL = listNL[i];
    if(messages == 'rock' || messages == 'paper' || messages == 'scissors'){
        if(messages == 'rock' && choiceEN == 'rock'){
            message.channel.send("**We tied!** I chose Rock.");
        }
        else if(messages == 'rock' && choiceEN == 'paper'){
            message.channel.send("**I won!** I chose Paper.");
        }
        else if(messages == 'rock' && choiceEN == 'scissors'){
            message.channel.send("**You win!** I chose Scissors.");
        }
        else if(messages == 'paper' && choiceEN == 'rock'){
            message.channel.send("**You win!** I chose Rock.");
        }
        else if(messages == 'scissors' && choiceEN == 'rock'){
            message.channel.send("**I won!** I chose Rock.");
        }
        else if(messages == 'paper' && choiceEN == 'paper'){
            message.channel.send("**We tied!** I chose Paper.");
        }
        else if(messages == 'paper' && choiceEN == 'scissors'){
            message.channel.send("**I won!** I chose Scissors");
        }
        else if(messages == 'scissors' && choiceEN == 'scissors'){
            message.channel.send("**We tied!** I chose Scissors.");
        }
        else if(messages == 'scissors' && choiceEN == 'paper'){
            message.channel.send("**You win!** I chose Paper.");
        }
        else{
            message.channel.send("Add another if not everything is implemented yet " + choiceEN + i);
        }
    }
    else if(messages == 'steen' || messages == 'papier' || messages == 'schaar'){

        if(messages == 'steen' && choiceNL == 'steen'){
            message.channel.send("**Het is gelijkspel!** Ik koos Steen.");
        }
        else if(messages == 'steen' && choiceNL == 'papier'){
            message.channel.send("**Ik win!** Ik koos Papier.");
        }
        else if(messages == 'steen' && choiceNL == 'schaar'){
            message.channel.send("**Jij wint!** Ik koos Schaar.");
        }
        else if(messages == 'papier' && choiceNL == 'steen'){
            message.channel.send("**Jij wint!** Ik koos Steen.");
        }
        else if(messages == 'schaar' && choiceNL == 'steen'){
            message.channel.send("**Ik win!** Ik koos Steen.");
        }
        else if(messages == 'papier' && choiceNL == 'papier'){
            message.channel.send("**Het is gelijkspel!** Ik koos Papier.");
        }
        else if(messages == 'papier' && choiceNL == 'schaar'){
            message.channel.send("**Ik win!** Ik koos Schaar");
        }
        else if(messages == 'schaar' && choiceNL == 'schaar'){
            message.channel.send("**Het is gelijkspel!** Ik koos Schaar.");
        }
        else if(messages == 'schaar' && choiceNL == 'papier'){
            message.channel.send("**Jij wint!** Ik koos Papier.");
        }
        else{
            message.channel.send("Add another if not everything is implemented yet " + choiceNL + i);
        }
    }
    else{
        message.channel.send("You didn't choose 1 of the options. The Languages you can play in are NL and EN");
    }
}
// ROCK PAPER SCISSORS END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// DICE ROLL START //
function Roll(message)
{
    let member = message.guild.member(message.author);
    let nickname = member ? member.displayName : null;
    var messages = message.content.slice(6).toLowerCase();
    var i = Math.floor(Math.random() * parseInt(messages)) + 1 ;
    if(i == '69'){
        message.channel.send("https://tenor.com/view/kevin-the-office-smirk-gif-5248324");}
    if(messages == '69'){
        message.channel.send("https://tenor.com/view/office-the-kevin-from-wine-gif-13397053");
    }
    else if(messages == '420'){
        message.channel.send("https://tenor.com/view/afroman-high-baked-gif-5764943");
    }
    else{
        message.channel.send(nickname + ', You rolled a ' + i + '!');
    }
}
// DICE ROLL END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// QUEUE START //
function Queue(message)
{
    if (!servers[message.guild.id]) {

        servers[message.guild.id] = {queue: []}
    }
    var server = servers[message.guild.id];
    if(!server.queue[0]){
        const embed = new Discord.RichEmbed();
        embed.setAuthor("Queue:", message.author.displayAvatarURL);
        embed.setTitle("What are you looking at? There is nothing here!");
        message.channel.send({embed});
    }
    else{
        const embed = new Discord.RichEmbed();
        embed.setAuthor("Queue:", message.author.displayAvatarURL);
        for(song of server.queue){
            embed.addField(song.title, song.channelTitle)
        }
        message.channel.send({embed});
    }

}
// QUEUE END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// LEAVE START //
function Leave(message)
{
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
}
// LEAVE END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// PAUSE START //
function Pause(message){
    var server = servers[message.guild.id];
    if (server.dispatcher.paused){
        message.channel.send('dispatched is already paused')
    }
    else{
        server.dispatcher.pause();
    }
}
// PAUSE END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// RESUME START //
function Resume(message)
{
    var server = servers[message.guild.id];
    if (server.dispatcher.paused){
        server.dispatcher.resume();

    }
    else{
        message.channel.send('dispatched is not paused');
    }

}
// RESUME END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// FEEDBACK START //
function Feedback(message){
    const embed = new Discord.RichEmbed();
    embed.setTitle('**Feedback for bugs and ideas!**');
    embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
    embed.setDescription(`You can report a bug or give us ideas for more stuff to implement in the bot using the link in the title!`);
    embed.setURL("https://forms.gle/V5jdU9sBuVPWBzEk8");
    message.channel.send({embed});
}
// FEEDBACK END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// RUSSIAN ROULLETTE START //
function RR(message){
    participants = [];
    const embed = new Discord.RichEmbed();
    embed.setTitle('**Russian Roulette**');
    embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
    embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!`);
    embed.setFooter("Time remaining 15 seconds");
    message.channel.send(embed).then(sentEmbed => {
        sentEmbed.react("🔫");
        const filter = (reaction, user) => {
            if (reaction.emoji.name === "🔫"){
                participants.push(user.id);
            }
            return reaction.emoji.name === "🔫";
        };
        setTimeout(function(){
            embed.setTitle('**Russian Roulette**');
            embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
            embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!`);
            embed.setFooter("Time remaining 10 seconds");
            sentEmbed.edit(embed);
        }, 5000);
        setTimeout(function(){
            embed.setTitle('**Russian Roulette**');
            embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
            embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!`);
            embed.setFooter("Time remaining 5 seconds");
            sentEmbed.edit(embed);
        }, 10000);
        sentEmbed.awaitReactions(filter, { time: 15000 })
            .then(collected => {var i = Math.floor(Math.random() * (participants.length - 1) + 1);
                embed.setTitle('**Russian Roulette**');
                embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
                embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!\n**Winner:** <@${participants[i]}> was shot to death!`);
                embed.setFooter("Time remaining 0 seconds");
                const shot = sentEmbed.guild.members.get(participants[i]);
                if(shot.id === '271720534767697930') {
                    embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!\n**Winner:** <@${participants[i]}> was shot to death!\nHas **Not** been muted due to **Owner** rights`);
                    sentEmbed.edit(embed);
                }
                else{
                    let muterole = message.guild.roles.find(`name`, "muted");
                    //start of create role
                    if(!muterole){
                        try{
                            muterole =  message.guild.createRole({
                                name: "muted",
                                color: "#000000",
                                permissions:[]
                            })
                            message.guild.channels.forEach(async (channel, id) => {
                                await channel.overwritePermissions(muterole, {
                                    SEND_MESSAGES: false,
                                    ADD_REACTIONS: false
                                });
                            });
                        }catch(e){
                            console.log(e.stack);
                        }
                        shot.addRole(muterole.id);
                    }
                    //end of create role
                    mutetime = 120000;
                    shot.addRole(muterole.id);
                    embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!\n**Winner:** <@${participants[i]}> was shot to death!\nAnd has been muted for 2 Minutes.`);
                    sentEmbed.edit(embed);
                    setTimeout(function(){
                        shot.removeRole(muterole.id);
                    }, mutetime);
                }


            })
    })
}
// RUSSIAN ROULLETTE END//
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// DISCORD STATUS START //
client.on('ready', () => {
    console.log('I am ready!');
     client.user.setStatus('available')
     client.user.setPresence({
        game: {
            name: 'Testing Commands',
        }
    });
});
// DISCORD STATUS END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// MUSIC CLIENT START //
(async () => {
   await client.login(process.env.BOT_TOKEN);
   client.music = new ErelaClient(client, [
       {
           host: process.env.HOST,
           port: process.env.PORT,
           password: process.env.PASSWORD
       }
   ]);
})();
// MUSIC CLIENT END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// COMMANDS START //
client.on('message', async message => {
    //getting sinon quotes
    if (message.content === prefix + 'q')
    {
        Quote(message);
    }
    // the help function
    else if (message.content ===  prefix +'help')
    {
        Help(message);
    }
    // testing embed/ getting someone's avatar
    else if (message.content.startsWith (prefix +'avatar'))
    {
        Avatar(message);
    }
    //getting the amount of members in the current server
    else if (message.content === prefix + `server`)
    {
        Server(message);
    }
    // saying hello to a mentioned person
    else if (message.content.startsWith (prefix + 'u'))
    {
        MentionTest(message);
    }
    //sending a private message via the bot
    else if (message.content.startsWith (prefix + 'send'))
    {
        SendPrivate(message);
    }
    // playing + queueing song
    else if (message.content.startsWith( prefix + 'p '))
    {
       // Plays(message);
    }
    // gif your game react
    else if(message.content.startsWith('https://www.gifyourgame.com/'))
    {
        message.react('⭐');
    }
    //Rock paper scissors
    else if(message.content.startsWith(prefix + 'rps'))
    {
        RPS(message);
    }
    //roll the dice!
    else if(message.content.startsWith(prefix + 'roll '))
    {
        Roll(message);
    }
    //queue
    else if(message.content === ( prefix + 'queue'))
    {
        Queue(message);
    }
    //leave's the voice channel
    else if(message.content === ( prefix + 'leave'))
    {
        Leave(message);
    }
    else if(message.content === (prefix + 'pause'))
    {
        Pause(message);
    }
    else if(message.content === (prefix + 'resume'))
    {
        Resume(message);
    }
    //hate command for the sinon haters
    else if(message.content == (prefix + 'hate'))
    {
        counter += 1;
        message.channel.send('Sadly ' + counter + ' persons have hated me so far.');
    }
    //Feedback command for bugs or ideas
    else if(message.content == (prefix + 'feedback'))
    {
        Feedback(message);
    }
    // Rusian Roulette
    else if(message.content == (prefix + 'rr'))
    {
        RR(message);
    }
    // Discord
    else if(message.content === prefix + 'discord')
    {
        message.channel.send('https://discord.gg/yQcB6mz');
    }



});
// COMMANDS END //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// BOT TOKEN //
client.login(process.env.BOT_TOKEN);
