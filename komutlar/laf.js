const Discord = require("discord.js");

exports.run = (client, message, params) => {

const embed = new Discord.RichEmbed()

      .setAuthor(message.author.username + " Lafı Koydu !!")
      .setColor("RED")
       .setFooter("HARDCORE Bot")
      .setTimestamp()
      .setDescription("")
      .setImage('https://i.ytimg.com/vi/JE5GOustBkk/maxresdefault.jpg');

return message.channel.send(embed);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "napim",
  description: "Lafı Koy",
  usage: "napim"
};