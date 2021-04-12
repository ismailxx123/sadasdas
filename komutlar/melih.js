
const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    return message.channel.send("**MELİH BAK UÇUYORSUN MELİH**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('https://cdn.glitch.com/a2508f05-e975-439d-bcd4-4112e93ce1a9%2F36aa6048b506a3efc53e2effcf494d79.png?v=1611271422419');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('https://i.hizliresim.com/5KNrt6.png');
                        }, 2000);
                        setTimeout(() => {
                            msg.edit('https://i.hizliresim.com/c3Svk1.jpg');
                        }, 3000);
                        setTimeout(() => {
                            msg.edit('https://i.hizliresim.com/JVfbTl.jpg');
                        }, 4000);
                        setTimeout(() => {
                          msg.edit('https://i.hizliresim.com/4EUx5n.jpg');
                        }, 5000);
                        setTimeout(() => {
                          msg.edit('https://i.hizliresim.com/WRpd8Y.jpg');
                        }, 6000);
                        setTimeout(() => {
                          msg.edit('https://i.hizliresim.com/DPMRWY.jpg');
                        }, 7000);
                        setTimeout(() => {
                          msg.edit('https://i.hizliresim.com/CNLXZZ.jpg');
                        }, 8000);
                        setTimeout(() => {
                          msg.edit('https://i.hizliresim.com/maQ9Ez.jpg');
                        }, 9000);
                        setTimeout(() => {
                          msg.edit('https://i.hizliresim.com/1a0dc9.jpg');
                        }, 10000);
                        setTimeout(() => {
                          msg.edit('**BAK ŞUAN AMERİKADASIN MELİH **');
                        }, 11000);
                        setTimeout(() => {
                            msg.delete(`**BAK ŞUAN AMERİKADASIN MELİH **`);
                        }, 30000);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['melih'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "MELİH",
                  description: "melih bak uçuyon",
                  usage: "melih"
                };