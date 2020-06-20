const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.token);

bot.on('ready', () =>{
    console.log('this bot is online lamo!');
})

bot.on('message', msg=>{
    if(msg.content.toLowerCase() === 'Lmao')
    msg.channel.send('its not Lmao, ITS LAMO.');


    else if (msg.content.toLowerCase() === 'lmao')
    msg.reply('its not lmao, ITS LAMO');
   
    else if (msg.content.toLowerCase() === 'lena')
    msg.reply('lena is cute');

    else if (msg.content.toLowerCase() === 'Lena')
    msg.reply('Lena is cute');

    else if (msg.content.toLowerCase() === 'Cute')
    msg.reply('Lena is Cute <3');
            
    else if (msg.content.toLowerCase() === 'cute')
    msg.reply('Lena is cute <3');

    else if (msg.content.toLowerCase() === 'Litty')
    msg.reply('LITTY GANG BANG');

    else if (msg.content.toLowerCase() === 'litty')
    msg.reply('LITTY GANG BANG');
            
    else if (msg.content.toLowerCase() === 'daq')
    msg.reply('daq is a munafiq');

    else if (msg.content.toLowerCase() === 'Daq')
    msg.reply('Daq is a munafiq');

    else if (msg.content.toLowerCase() === 'Taylah')
    msg.reply('Taylah is a cutie');

    else if (msg.content.toLowerCase() === 'taylah')
    msg.reply('taylah is a cutie');

    else if (msg.content.toLowerCase() === 'Red')
    msg.reply('Red is gay LAMO');

    else if (msg.content.toLowerCase() === 'red')
    msg.reply('red is gay LAMO');

    else if (msg.content.toLowerCase() === 'Zoz')
    msg.reply('Zoz is arab lamo');

    else if (msg.content.toLowerCase() === 'zoz')
    msg.reply('zoz is a jew lamo');

    else if (msg.content.toLowerCase() === 'Zoz')
    msg.reply('Zoz is a jew lamo');

    else if (msg.content.toLowerCase() === 'drogo')
    msg.reply('who?');

    else if (msg.content.toLowerCase() === 'Drogo')
    msg.reply('who?');

    else if (msg.content.toLowerCase() === 'beely')
    msg.reply('Ayo FAM MANNY ON DA PING TING');

    else if (msg.content.toLowerCase() === 'Beely')
    msg.reply('Ayo FAM MANNY ON DA PING TING');

    else if (msg.content.toLowerCase() === 'hemzero')
    msg.reply('yeh');

    else if (msg.content.toLowerCase() === 'Hemzero')
    
  msg.reply('yeh');

    else if (msg.content.toLowerCase() === 'Persona')
    msg.reply('litty');

    else if (msg.content.toLowerCase() === 'persona')
    msg.reply('litty');

    else if (msg.content.toLowerCase() === 'icy')
    msg.reply('icy is a simp');

    else if (msg.content.toLowerCase() === 'Icy')
    msg.reply('icy is a simp');

    else if (msg.content.toLowerCase() === 'dijinn')
    msg.reply('dijenerate');

    else if (msg.content.toLowerCase() === 'Dijinn')
    msg.reply('dijenerate');

    else if (msg.content.toLowerCase() === 'Baz')
    msg.reply('scuffed witcher');

    else if (msg.content.toLowerCase() === 'baz')
    msg.reply('scuffed witcher');

    else if (msg.content.toLowerCase() === 'boobs')
    msg.reply('(.)(.)');

    else if (msg.content.toLowerCase() === 'Boobs')
    msg.reply('(.)(.)');

    else if (msg.content.toLowerCase() === 'Tupac')
    msg.reply('ayo watch your rat mods');

    else if (msg.content.toLowerCase() === 'tupac')
    msg.reply('ayo watch your rat mods');



            


});
