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
  var prefix, command, arguments2, commandwithprefix;


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

  s4d.client.on('ready', async () => {
    prefix = ',';

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

      console.log('loop ran')
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
          description: ('/aki - play akinator'+
                        '\n'+
                        '/s4d - gives link for the specified preview (implemented in s4d faq bot)'+
                        '\n'+ 
                        '/ticketset channel:#channel - set channel to ticket channel'+
                        '\n'+
                        '/ticketclose - closes ticket (send in open ticket)'+
                        '\n'+
                        '/ticketarchive - archive ticket (send in open ticket)
                        '\n'+
                        '/ticketunarchive - unarchives an archived ticket (send in archived ticket)'+
                        '\n'+
                        'more soon'+
                       '\n'),
          footer: {
            text: 'These commands also work with the prefix ,'
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
          description: ('/aki - play akinator'+
                        '\n'+
                        '/s4d - gives link for the specified preview (implemented in s4d faq bot)'+
                        '\n'+ 
                        '/ticketset channel:#channel - set channel to ticket channel'+
                        '\n'+
                        '/ticketclose - closes ticket (send in open ticket)'+
                        '\n'+
                        '/ticketarchive - archive ticket (send in open ticket)
                        '\n'+
                        '/ticketunarchive - unarchives an archived ticket (send in archived ticket)'+
                        '\n'+
                        'more soon'+
                       '\n'),
          footer: {
            text: 'These commands also work with the prefix ,'
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

