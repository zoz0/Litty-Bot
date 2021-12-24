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

    else if (msg.content.toLowerCase() === 'Zoz')
    msg.reply('Zoz is a jew lamo');

    else if (msg.content.toLowerCase() === 'zoz')
    msg.reply('zoz is a jew lamo');
    
    else if (msg.content.toLowerCase() === 'Roz')
    msg.reply('roz more like a dumb little mango');

    else if (msg.content.toLowerCase() === 'roz')
    msg.reply('roz more like a dumb little mango');    
    
    else if (msg.content.toLowerCase() === 'Sara')
    msg.reply('Sara more like Kara LMAO');

    else if (msg.content.toLowerCase() === 'sara')
    msg.reply('Sara more like kara LMAO');    
    
    else if (msg.content.toLowerCase() === 'Sam')
    msg.reply('اللههههههههه يسلمكككك');

    else if (msg.content.toLowerCase() === 'sam')
    msg.reply('اللههههههههه يسلمكككك');   
    
    else if (msg.content.toLowerCase() === 'Tahnoon')
    msg.reply('do you mean tahani? yeah she is cute');

    else if (msg.content.toLowerCase() === 'tahnoon')
    msg.reply('do you mean tahani? yeah she is cute');   
    
    else if (msg.content.toLowerCase() === 'Tala')
    msg.reply('Tala more like shorta lmao');

    else if (msg.content.toLowerCase() === 'tala')
    msg.reply('Tala more like shorta lmao');   
    
    else if (msg.content.toLowerCase() === 'Fayhan')
    msg.reply('undercover fbi');

    else if (msg.content.toLowerCase() === 'fayhan')
    msg.reply('undercover fbi');   
    
    else if (msg.content.toLowerCase() === 'Sackboy')
    msg.reply('the forehead master');

    else if (msg.content.toLowerCase() === 'sackboy')
    msg.reply('the forehead master');   
      
    else if (msg.content.toLowerCase() === 'Skancher')
    msg.reply('he is not out of the closet, the closet is out of him');

    else if (msg.content.toLowerCase() === 'skancher')
    msg.reply('he is not out of the closet, the closet is out of him');


    else if (msg.content.toLowerCase() === 'Mari')
    msg.reply('the most submissive person in the multiverse');

    else if (msg.content.toLowerCase() === 'mari')
    msg.reply('the most submissive person in the multiverse');

    
    
    
    
    
    
    
            


});
