(async () => {
  //hello :) hehe
  let process = require('process');
  process.on('uncaughtException', function(err) {
    console.log(err);
  });
  let Discord = require("discord.js")
  let Database = require("easy-json-database")
  let {
    MessageEmbed,
    MessageButton,
    MessageActionRow,
    Intents,
    Permissions,
    MessageSelectMenu
  } = require("discord.js")
  let logs = require("discord-logs")
  let https = require("https")
  const akinator = require("discord.js-akinator");
  const lyricsFinder = require('lyrics-finder');
  const ticket = require('tickets-discord');
  const {
    start,
    login
  } = require('tickets-discord');
  const SnakeGame = require('snakecord');
  const { Snake } = require('weky');
  require('events').EventEmitter.defaultMaxListeners = 50;
  const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const s4d = {
    Discord,
    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database.json`),
    joiningMember: null,
    reply: null,
    tokenInvalid: false,
    tokenError: null,
    player: null,
    manager: null,
    Inviter: null,
    message: null,
    notifer: null,
    checkMessageExists() {
      if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
      if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
    }
  };
  s4d.client = new s4d.Discord.Client({
    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
    partials: ["REACTION"]
  });
  logs(s4d.client);
  var prefix, command, arguments2, commandwithprefix, random;

  function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }

  await s4d.client.login(process.env.token).catch((e) => {
    s4d.tokenInvalid = true;
    s4d.tokenError = e;
  });

  ticket.start(s4d.client, 'local');

  //create webserver
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('This site was created for make bot online 25/8');
});
server.listen(3000);
console.log('Logged in as "'+ s4d.client.user.username + '"')

  s4d.client.on('ready', async () => {
    prefix = ',';

    savedInvList = ['axe', 0, 'balloon', 0, 'codeBlock', 0, 'candyCane', 0];

    while (s4d.client && s4d.client.token) {
      await delay(Number(10) * 1000);
      s4d.client.user.setActivity("your life", {
        type: "STREAMING",
        url: 'https://github.com/frostzzone'
      });

      await delay(Number(10) * 1000);
      s4d.client.user.setPresence({
        status: "online",
        activities: [{
          name: 'the sounds of rain and /help',
          type: "LISTENING"
        }]
      });
      await delay(Number(5) * 1000);
    }

  });

  s4d.client.on('interactionCreate', async (interaction) => {
    let member = interaction.guild.members.cache.get(interaction.member.user.id)
    if ((interaction.commandName) == 'help') {
      await interaction.reply({
        embeds: [{
          title: 'Help',
          color: null,
          image: {
            url: null
          },
          description: ('**Games**'+
                        '\n'+
                        '/aki - play akinator'+
                        '\n\n'+
                        '**Others**'+
                        '\n'+
                        '/s4d - gives link for the specified preview (implemented in s4d faq bot)'+
                        '\n\n'+
                        '**Tickets**'+
                        '\n'+
                        '/ticketset channel:#channel - set channel to ticket channel'+
                        '\n'+
                        '/ticketclose - closes ticket (send in open ticket)'+
                        '\n'+
                        '/ticketarchive - archive ticket (send in open ticket)'+
                        '\n'+
                        '/ticketunarchive - unarchives an archived ticket (send in archived ticket)'+
                        '\n'+
                        'more soon'+
                       '\n'),
          footer: {
            text: 'Run `,help` to see prefix commands'
          },
          thumbnail: {
            url: null
          }
        }],
      });
    }
    if ((interaction.commandName) == 's4d') {
      await interaction.reply({
        content: (['[here is the  ', interaction.options.getInteger('version'), ' link]', '(<https://deploy-preview-', interaction.options.getInteger('version'), '--scratch-for-discord.netlify.app>)'].join('')),
        ephemeral: false,
        components: []
      });
    }
    if ((interaction.commandName) == 'say') {
      await interaction.reply({
        content: (interaction.options.getString('text')),
        ephemeral: false,
        components: []
      });
    }
    if ((interaction.commandName) == 'invite') {
            let embed = new Discord.MessageEmbed()
            embed.setTitle('Thanks,')
                .setURL();
            embed.setDescription('[My invite link :D](https://discord.com/api/oauth2/authorize?client_id=905539161501609985&permissions=137707719760&scope=applications.commands%20bot)');

            await interaction.reply({
                embeds: [(embed)],
                ephemeral: false,
                components: []
            });
        }
    if ((interaction.commandName) == 'ticketset') {
      let member = interaction.guild.members.cache.get(interaction.member.user.id)
      if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        ticket.setup(interaction, interaction.options.getChannel('channel').id);
        await interaction.reply({
          content: String((['I have set the ticket channel to ', '<#', interaction.options.getChannel('channel'), '>'].join('')))
        })
      } else {
        await interaction.reply({
          content: ('you are missing the permission `Administrator`'),
          ephemeral: true,
          components: []
        })
      }
    }

    if ((interaction.commandName) == 'ticketclose') {
      let member = interaction.guild.members.cache.get(interaction.member.user.id)
      if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        await interaction.reply({
          content: ('Closed this ticket'),
          ephemeral: false,
          components: []
        });
        ticket.close(interaction.channel);
      } else {
        await interaction.reply({
          content: ('you are missing the permission `Administrator`'),
          ephemeral: true,
          components: []
        })
      }
    }
    if ((interaction.commandName) == 'ticketarchive') {
      let member = interaction.guild.members.cache.get(interaction.member.user.id)
      if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        await interaction.reply({
          content: ('Archived this ticket')
        });
        ticket.archive(interaction.channel);
      } else {
        await interaction.reply({
          content: ('you are missing the permission `Administrator`'),
          ephemeral: true,
          content: []
        })
      }
    }
    if ((interaction.commandName) == 'ticketunarchive') {
      let member = interaction.guild.members.cache.get(interaction.member.user.id)
      if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        await interaction.reply({
          content: ('Unarchived this ticket')
        });
        ticket.unarchive(interaction.channel);
      } else {
        await interaction.reply({
          content: ('you are missing the permission `Administrator`'),
          ephemeral: true,
          content: []
        })
      }
    }
    if ((interaction.commandName) == 'snake') {
      await interaction.reply({
        content: (snakeGame.newGame(interaction)),
        ephemeral: false,
        components: []

      })
    }
    if ((interaction.commandName) == 'aki') {
      await interaction.reply({
        content: (
          akinator(interaction, {
            language: "en",
            childMode: true,
            gameType: (interaction.options.getString('type')),
            useButtons: true
          })),
        ephemeral: true,
        components: []
      })
    }

  });


  s4d.client.on('messageCreate', async (s4dmessage) => {
    if (!((s4dmessage.author).bot)) {
      arguments2 = (s4dmessage.content).split(' ');
      commandwithprefix = arguments2.splice(0, 1)[0];
      if ((commandwithprefix || '').startsWith(prefix || '')) {
        command = commandwithprefix.slice(((prefix.length + 1) - 1), commandwithprefix.length);
        if (command == 'help') {
        s4dmessage.channel.sendTyping();
          await delay(Number(1) * 1000);
          s4dmessage.channel.send({
            embeds: [{
          title: 'Help',
          color: null,
          image: {
            url: null
          },
          description: ('**Games**'+
                        '\n'+
                        ',aki - play akinator'+
                        '\n'+
                        ',snake - play snake'+
                        '\n\n'+
                        '**Tickets**'+
                        '\n'+
                        ',ticket <#channel> - set mentioned channel to ticket channel'+
                        '\n'+
                        ',close - closes ticket (send in open ticket)'+
                        '\n'+
                        ',archive - archive ticket (send in open ticket)'+
                        '\n'+
                        ',unarchive - unarchives an archived ticket (send in archived ticket)'+
                        '\n\n'+
                        '**Economy**'+
                        '\n'+
                        ',beg - beg for money (has a 5 second cooldown)'+
                        '\n'+
                        ',bal - check your balance'+
                        '\n'+
                        'more soon'+
                       '\n'),
          footer: {
            text: 'Do `/help` to see slash commands'
          },
          thumbnail: {
            url: null
          }
        }],
      });
        }
        if (command == 'aki') {
          s4dmessage.channel.sendTyping();
          await delay(Number(1) * 1000);
          (s4dmessage.channel).send({
            embeds: [{
              title: 'Akinator',
              color: '#ff0000',
              image: {
                url: null
              },
              description: (['Think about something and awnser questions about it', '\n', '\n', '👤Character - I\'m thinking of a character', '\n', '🏠Object - I\'m thinking of an object', '\n', '🐛Animal - I\'m thinking of an animal'].join('')),
              footer: {
                text: null
              },
              thumbnail: {
                url: null
              }
            }],
            components: [(new MessageActionRow()
              .addComponents(new MessageButton()
                .setCustomId('c')
                .setLabel('Character')
                .setEmoji('👤')
                .setStyle(('SUCCESS')),
                new MessageButton()
                  .setCustomId('o')
                  .setLabel('Object')
                  .setEmoji('🏠')
                  .setStyle(('DANGER')),
                new MessageButton()
                  .setCustomId('a')
                  .setLabel('Animal')
                  .setEmoji('🐛')
                  .setStyle(('PRIMARY')),
              ))]
          }).then(m => {
            let collector = m.createMessageComponentCollector({
              filter: i => i.user.id === (s4dmessage.author).id,
              time: 60000
            });
            collector.on('collect', async i => {
              if ((i.customId) == 'c') {
                akinator(s4dmessage, {
                  language: "en",
                  childMode: true,
                  gameType: 'character',
                  useButtons: true
                })
              } else if ((i.customId) == 'a') {
                akinator(s4dmessage, {
                  language: "en",
                  childMode: true,
                  gameType: 'animal',
                  useButtons: true
                })
              } else if ((i.customId) == 'o') {
                akinator(s4dmessage, {
                  language: "en",
                  childMode: true,
                  gameType: 'object',
                  useButtons: true
                })
              }

            })

          });
        }
        if (command == 'snake') {
          const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: 'GREEN',
            timestamp: false,
            gameOverTitle: 'Game Over'
        });
        snakeGame.newGame(s4dmessage);
        }
    if (command == 'invite') {
            let embed = new Discord.MessageEmbed()
            embed.setTitle('Thanks,')
                .setURL();
            embed.setDescription('[My invite link :D](https://discord.com/api/oauth2/authorize?client_id=905539161501609985&permissions=137707719760&scope=applications.commands%20bot)');

            await s4dmessage.reply({
                embeds: [(embed)],
                ephemeral: false,
                components: []
            });
        }
        
        if (command == 'beg') {
            if (!s4d.database.has(String((String((s4dmessage.author).id) + '-begcd')))) {
                s4d.database.set(String((String((s4dmessage.author).id) + '-begcd')), ((Math.floor(new Date().getTime() / 1000)) - 1));
            }
          if (!s4d.database.has(String((String((s4dmessage.author).id) + '-bank')))) {
            s4d.database.set(String((String((s4dmessage.author).id) + '-bank')), 0);
        }
            if (s4d.database.get(String((String((s4dmessage.author).id) + '-begcd'))) <= (Math.floor(new Date().getTime() / 1000))) {
                if (s4d.database.has(String((String((s4dmessage.author).id) + '-cash')))) {
                    random = mathRandomInt(1, 1000);
                    if (random == 69) {
                        s4d.database.add(String((String((s4dmessage.author).id) + '-cash')), parseInt(1000));
                        s4dmessage.reply({
                            embeds: [{
                                title: '🙏 Blessed',
                                color: null,
                                image: {
                                    url: null
                                },
                                description: '"Here have `1000` coins" - frostzzone',
                                footer: {
                                    text: 'You got the 1 in 1000 chance'
                                },
                                thumbnail: {
                                    url: null
                                }
                            }],
                            
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        random = mathRandomInt(1, 200);
                        s4d.database.add(String((String((s4dmessage.author).id) + '-cash')), parseInt(random));
                        s4dmessage.reply({
                            embeds: [{
                                title: 'Begger',
                                color: null,
                                image: {
                                    url: null
                                },
                                description: (['"Here have `', random, '` coins" - Random person'].join('')),
                                footer: {
                                    text: 'Theres a 1 in 1000 chance for begging'
                                },
                                thumbnail: {
                                    url: null
                                }
                            }],
                            
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                } else {
                    random = mathRandomInt(1, 200);
                    s4d.database.set(String((String((s4dmessage.author).id) + '-cash')), (Number(random)));
                    s4dmessage.reply({
                        embeds: [{
                            title: 'Begger',
                            color: null,
                            image: {
                                url: null
                            },
                            description: (['"Here have `', random, '` coins" - Random person'].join('')),
                            footer: {
                                text: 'Theres a 1 in 1000 chance for begging'
                            },
                            thumbnail: {
                                url: null
                            }
                        }],
                        
                        allowedMentions: {
                            repliedUser: true
                        }
                    });
                }
                s4d.database.set(String((String((s4dmessage.author).id) + '-begcd')), ((Math.floor(new Date().getTime() / 1000)) + 5));
            } else {
                s4dmessage.reply({
                    embeds: [{
                        title: 'Your on cooldown',
                        color: null,
                        image: {
                            url: null
                        },
                        description: (['Your beg is on cooldown for `', s4d.database.get(String((String((s4dmessage.author).id) + '-begcd'))) - (Math.floor(new Date().getTime() / 1000)), '` more seconds'].join('')),
                        footer: {
                            text: 'Please wait'
                        },
                        thumbnail: {
                            url: null
                        }
                    }],
                    
                    allowedMentions: {
                        repliedUser: true
                    }
                });
            }
        }

        if (command == 'bal') {
            if (!s4d.database.has(String((String((s4dmessage.author).id) + '-bank')))) {
                s4d.database.set(String((String((s4dmessage.author).id) + '-bank')), 0);
            }
            if (!s4d.database.has(String((String((s4dmessage.author).id) + '-cash')))) {
                s4d.database.set(String((String((s4dmessage.author).id) + '-cash')), 0);
            }
            try {
                if (!((s4dmessage.mentions.members.first().user) == null)) {
                    if (s4d.database.has(String((String((s4dmessage.mentions.members.first().user).id) + '-cash'))) && s4d.database.has(String((String((s4dmessage.mentions.members.first().user).id) + '-bank')))) {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String((s4dmessage.mentions.members.first().user).username) + '\'s Balance')))


                                .setDescription(String('This user has never played'))


                            ],
                            ,
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                }
                    } else {
                      s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((['**', (s4dmessage.mentions.members.first().user).username, '\'s Balance**'].join(''))))


                                .setDescription(String((['**Wallet**:', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-cash'))), '\n', '**Bank**:', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-bank')))].join(''))))


                            ],
                            ,
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                        

            } catch (err) {
                command = arguments2.splice(0, 1)[0];
                try {
                    if (!!command.length) {
                        if (s4d.database.has(String((String(command) + '-cash'))) && s4d.database.has(String((String(command) + '-bank')))) {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((['**', (((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).username, '\'s Balance**'].join(''))))


                                    .setDescription(String((['**Wallet**:', s4d.database.get(String((String(Number(command)) + '-cash'))), '\n', '**Bank**:', s4d.database.get(String((String(Number(command)) + '-bank')))].join(''))))


                                ],
                                ,
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        } else {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).username) + '\'s Balance')))


                                    .setDescription(String('This user has never played'))


                                ],
                                ,
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        }
                    }

                } catch (err) {
                    if (s4d.database.has(String((String((s4dmessage.author).id) + '-cash'))) && s4d.database.has(String((String((s4dmessage.author).id) + '-bank')))) {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((['**', (s4dmessage.author).username, '\'s Balance**'].join(''))))


                                .setDescription(String((['**Wallet**:', s4d.database.get(String((String((s4dmessage.author).id) + '-cash'))), '\n', '**Bank**:', s4d.database.get(String((String((s4dmessage.author).id) + '-bank')))].join(''))))


                            ],
                            ,
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String((s4dmessage.author).username) + '\'s Balance')))


                                .setDescription(String('This user has never played'))


                            ],
                            ,
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }

                };

            };
        }
 

      if (command == 'inv') {
            if (s4d.database.has(String((String((s4dmessage.author).id) + '-inv')))) {
                inv_list = s4d.database.get(String((String((s4dmessage.author).id) + '-inv')));
                if (!(inv_list.length == savedInvList.length)) {
                    var repeat_end = savedInvList.length - inv_list.length;
                    for (var count = 0; count < repeat_end; count++) {
                        inv_list.push((savedInvList[((inv_list.length + 1) - 1)]));
                    }
                }
            } else {
                inv_list = savedInvList;
            }
            let embed = new Discord.MessageEmbed()
            embed.setTitle('Inventory');
            embed.addField('🪓 Axe', (['You have (`', inv_list[(1 * 2 - 1)], '`)'].join('')), true);
            embed.addField('🎈 Balloon', (['You have (`', inv_list[(2 * 2 - 1)], '`)'].join('')), true);
            embed.addField('<:block:917859160203346000> Code Block', (['You have (`', inv_list[(3 * 2 - 1)], '`)'].join('')), true);
            embed.addField('<:candy_cane:916777883991674912> Candy Cane', (['You have (`', inv_list[(4 * 2 - 1)], '`)'].join('')), true);
            s4dmessage.reply({
                embeds: [embed]
            });

            s4d.database.set(String((String((s4dmessage.author).id) + '-inv')), inv_list);
        }                     
        
        // This will set your ticket channel to mentioned channel
        if (command == 'ticket') {
          try {
            ticket.setup(s4dmessage, s4dmessage.mentions.channels.first().id);
            s4dmessage.channel.send({
              content: String((['I have set the ticket channel to ', '<#', s4dmessage.mentions.channels.first(), '>'].join('')))
            });

          } catch (err) {
            s4dmessage.channel.send({
              content: String('U need to mention a channel!')
            });

          };
        }
        if (command == 'close') {
          ticket.close(s4dmessage.channel);
          s4dmessage.channel.send({
            content: String('Closed the ticket')
          });
        }
        if (command == 'archive') {
          s4dmessage.channel.send({
            content: String('Archived the ticket')
          });
          ticket.archive(s4dmessage.channel);
        }
        if (command == 'unarchive') {
          s4dmessage.channel.send({
            content: String('Unarchived the ticket')
          });
          ticket.unarchive(s4dmessage.channel);
        }
    if (command == 'eval') {
            if ((s4dmessage.member.id) == '712342308565024818') {
                try {
                    s4dmessage.delete();
                    await eval((arguments2.join(' ')));

                } catch (err) {
                  
                    s4dmessage.channel.send({
                        content: String('I ran into an error')
                    }).then(async (s4dreply) => {
                        s4dmessage.delete();
                        await delay(Number(10) * 1000);
                        s4dreply.delete();

                    });

                };
            }
        }
      }
    }

  });
  
  return s4d
})();;

