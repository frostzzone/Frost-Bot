let prefix = 'e!'

const path = require('path')
console.clear();
const keepAlive = require("./server.js");
const cmnd = require('./commands/index.js');

let detabase = (path.join(__dirname, 'database.json'));

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
  const {
        Calculator,
        Snake,
        Fight,
        RockPaperScissors,
        WouldYouRather
    } = require('weky')
  let https = require("https")
  const akinator = require("discord.js-akinator");
  const lyricsFinder = require('lyrics-finder');
  const {
        DiscordTogether
    } = require('discord-together');
  const ticket = require('tickets-discord');
  const {
    start,
    login
  } = require('tickets-discord');
  const SnakeGame = require('snakecord');
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
    partials: ["REACTION", "CHANNEL"]
  });
  logs(s4d.client);
  var command, arguments2, commandwithprefix, random, maxpages, page, inv_list, savedInvList;

  function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }

  function colourRandom() {
        var num = Math.floor(Math.random() * Math.pow(2, 24));
        return '#' + ('00000' + num.toString(16)).substr(-6);
    }

  await s4d.client.login(process.env.token).catch((e) => {
    s4d.tokenInvalid = true;
    s4d.tokenError = e;
    console.log(e)
  });

  ticket.start(s4d.client, 'local'); 

console.log('Logged in as "'+ s4d.client.user.username + '"')

  s4d.client.on('ready', async () => {
    savedInvList = ['axe', 0, 'balloon', 0, 'codeBlock', 0, 'candyCane', 0, 'fireWork', 0];

    while (s4d.client && s4d.client.token) {
      await delay(Number(10) * 1000);
      s4d.client.user.setActivity("your life", {
        type: "STREAMING",
        url: 'https://www.twitch.tv/nocopyrightsounds'
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

  // Gets shop pages
    function shop_page(page) {
        maxpages = 1;
        if (page == 1) {
            let embed = new Discord.MessageEmbed()
            embed.setTitle('Shop');
            embed.addField('🪓 Axe `axe`', 'Unlocks `chop` (has a chance of breaking)', true);
            embed.addField('🎈 Balloon `ballo`', 'Personal coin boost for 10 min (`stacks on global boosts`)', true);
            embed.setFooter(('Page 1/' + String(maxpages)), );
            (s4dmessage.channel).send({
                embeds: [embed]
            });

        }
        if (page == 'event') {
            maxpages = 0;
            let embed = new Discord.MessageEmbed()
            embed.setTitle('Event Shop');
            if (((new Date().getMonth())) == 11) {
                maxpages = (typeof maxpages == 'number' ? maxpages : 0) + 1;
                embed.addField('<:candy_cane:916777883991674912> Candy Cane `candyc`', 'A seasonal collectable (only available during December)', false);
            }
            if (((new Date().getMonth())) == 11 || ((new Date().getMonth())) == 0) {
                maxpages = (typeof maxpages == 'number' ? maxpages : 0) + 1;
                embed.addField('🎆 Firework `firew`', 'Celebrate the beginning of a new year (available December and January)', false);
            }
            if (maxpages == 0) {
                maxpages = (typeof maxpages == 'number' ? maxpages : 0) + 1;
                embed.addField('No events', 'No events currently', false);
            }
            embed.setFooter(('Page event/' + String(maxpages)), );
            (s4dmessage.channel).send({
                embeds: [embed]
            });

        }
    }

                    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'testid') {
            if ((interaction.member)._roles.includes(((interaction.guild).roles.cache.get('926319451215892510')).id)) {
                (interaction.member).roles.remove(((interaction.guild).roles.cache.get('926319451215892510')));
                await interaction.reply({
                    ephemeral: true,
                    content: 'removed role',
                    components: []
                });
            } else {
                (interaction.member).roles.add(((interaction.guild).roles.cache.get('926319451215892510')));
                await interaction.reply({
                    ephemeral: true,
                    content: 'role added',
                    components: []
                });
            }
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
    if ((interaction.commandName) == 'eval') {
      if ((interaction.member.user).id == '712342308565024818') {
            try {
                eval(interaction.options.getString('code'));
            } catch (err) {
                await interaction.reply({
                    content: String(err),
                    ephemeral: true,
                    components: []
                });

            }
        } else {
          await interaction.reply({
            content: String('This is an owner only command'),
            ephemeral: true,
            components: []
          })
        }
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
      await sSnake({
            message: interaction,
            slash: true,
            embed: {
                title: 'Snake',
                description: 'GG, you scored **{{score}}** points!',
                color: (colourRandom()),
                footer: 'My foot 🦶',
                timestamp: true
            },
            emojis: {
                empty: '⬛',
                snakeBody: '🟩',
                food: '🫐',
                up: '⬆️',
                right: '⬅️',
                down: '⬇️',
                left: '➡️',
            },
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttonText: 'cancel'
        });
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
    if ((interaction.commandName) == 'beg') {
      
            if (s4d.database.has(String((String((interaction.member.user).id) + '-cash')))) {
                random = mathRandomInt(1, 1000);
                if (random == 69) {
                    s4d.database.add(String((String((interaction.member.user).id) + '-cash')), parseInt(10000));
                    await interaction.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String('🙏 Blessed'))


                            .setDescription(String('"Here have `10000` coins" - frostzzone'))
                            .setFooter(String('You got the 1 in 1000 chance'))


                        ],
                    });
                } else {
                    random = mathRandomInt(1, 200);
                    s4d.database.add(String((String((interaction.member.user).id) + '-cash')), parseInt(random));
                    await interaction.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String('Begger'))


                            .setDescription(String((['"Here have `', random, '` coins" - Random person'].join(''))))
                            .setFooter(String('Theres a 1 in 1000 chance for begging'))


                        ],
                    });
                }
            } else {
                random = mathRandomInt(1, 200);
                s4d.database.set(String((String((interaction.member.user).id) + '-cash')), (Number(random)));
                await interaction.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String('Begger'))


                        .setDescription(String((['"Here have `', random, '` coins" - Random person'].join(''))))
                        .setFooter(String('Theres a 1 in 1000 chance for begging'))


                    ],
                });
            }
        }

  });


  s4d.client.on('messageCreate', async (s4dmessage) => {
    if (!((s4dmessage.author).bot)) {
      if (((s4dmessage.channel).type) == 'DM' || (s4dmessage.channel).type == "GUILD_TEXT") {
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
                        prefix + 'aki - play akinator'+
                        '\n'+
                        prefix + 'snake - play snake\n,dt <yt|poker|chess|betrayal|fish|tile|snack|doodle>'+
                        '\n\n'+
                        '**Tickets**'+
                        '\n'+
                        prefix + 'ticket <#channel> - set mentioned channel to ticket channel'+
                        '\n'+
                        prefix + 'close - closes ticket (send in open ticket)'+
                        '\n'+
                        prefix + 'archive - archive ticket (send in open ticket)'+
                        '\n'+
                        prefix + 'unarchive - unarchives an archived ticket (send in archived ticket)'+
                        '\n\n'+
                        '**Economy**'+
                        '\n'+
                        prefix + 'beg - beg for money (has a 5 second cooldown)'+
                        '\n'+
                        prefix + 'bal - check your balance'+
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
        if (command == 'eval') {
          if ((s4dmessage.author.id) == '712342308565024818') {
            try {
                eval((arguments2.join(' ')));

            } catch (err) {
                s4dmessage.channel.send({
                    content: String(err)
                });

            }
        } else {
          s4dmessage.reply({
            content: String('This is an owner only command')
          })
        }
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
          await Snake({
            message: s4dmessage,
            embed: {
                title: 'Snake',
                description: 'GG, you scored **{{score}}** points!',
                color: (colourRandom()),
                footer: 'My foot 🦶',
                timestamp: true
            },
            emojis: {
                empty: '⬛',
                snakeBody: '🟩',
                food: '🫐',
                up: '⬆️',
                right: '⬅️',
                down: '⬇️',
                left: '➡️',
            },
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttonText: 'cancel'
        });
        }
        if (command == "calc") {await Calculator({
        message: s4dmessage,
        embed: {
            title: 'Cal cu litor',
            color: (colourRandom()),
            footer: 'my foot 🦶',
            timestamp: true
        },
        disabledQuery: 'This calculator is disabled',
        invalidQuery: 'Well that dont work here',
        othersMessage: 'Only <@{{author}}> can use the buttons!'
    });}
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
                    if (!(s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-cash'))) == null) && !(String((s4dmessage.mentions.members.first().user).id) + '-bank' == null)) {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((['**', (s4dmessage.mentions.members.first().user).username, '\'s Balance**'].join(''))))


                                .setDescription(String((['**Wallet**: ', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-cash'))), '\n', '**Bank**: ', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-bank')))].join(''))))


                            ],
                            
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String((s4dmessage.mentions.members.first().user).username) + '\'s Balance')))


                                .setDescription(String('This user has never played'))


                            ],
                            
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                }

            } catch (err) {
                command = arguments2.splice(0, 1)[0];
                try {
                    if (!!command.length) {
                        if (!(s4d.database.get((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).id + '-cash') == null) && !(s4d.database.get((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).id + '-bank') == null)) {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((['**', (((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).username, '\'s Balance**'].join(''))))


                                    .setDescription(String((['**Wallet**: ', s4d.database.get(String(((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).id + '-cash'))), '\n', '**Bank**: ', s4d.database.get(String(((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user) + '-bank')))].join(''))))


                                ],
                                
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
                                
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        }
                    }

                } catch (err) {
                    if (!(s4d.database.get(String((String((s4dmessage.author).id) + '-cash'))) == null) && !(String((s4dmessage.author).id) + '-bank' == null)) {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((['**', (s4dmessage.author).username, '\'s Balance**'].join(''))))


                                .setDescription(String((['**Wallet**: ', s4d.database.get(String((String((s4dmessage.author).id) + '-cash'))), '\n', '**Bank**: ', s4d.database.get(String((String((s4dmessage.author).id) + '-bank')))].join(''))))


                            ],
                            
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String((s4dmessage.author).username) + '\'s Balance')))


                                .setDescription(String('You have never played'))


                            ],
                            
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }

                };

            };
        }
 

      if (command == 'inv') {
            cmnd.inv(s4dmessage, detabase)
        }                     
        
        // This will set your ticket channel to mentioned channel
        if (command == 'ticket') {
          cmnd.tick(s4dmessage)
        }
        if (command == 'close') {
          cmnd.close(s4dmessage)
        }
        if (command == 'archive') {
          cmnd.archive(s4dmessage);
        }
        if (command == 'unarchive') {
          cmnd.unarchive(s4dmessage);
        }
      }
    }
      }
  });
  keepAlive()
  return s4d
})();;

