
const Discord = require("discord.js");
const client = new Discord.Client();


client.on('message', roodx=>{
  if(roodx.content === 'hi'){
   var embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setDescription(`pong`)
   roodx.channel.sendEmbed(embed).then(m=>{
     var em = new Discord.RichEmbed()
     .setDescription(m.timestamp - roodx.timestamp)
m.edit()
})
  }
})





client.login(process.env.BOT_TOKEN);
