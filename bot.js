let prefix = ',' //set prefix
const ownerid = '712342308565024818' //set this as your id
const case_sensitive = false //for prefix to be case sensitive true/fasle

if (!(case_sensitive == true || case_sensitive == false)) {
    throw new Error('case_sensitive has to be true/false');
}

const path = require('path')
console.clear();
const keepAlive = require("./server.js");
const cmnd = require('./commands/text/index.js');
const icmnd = require('./commands/slash/index.js');
const get_slash_json = false;
const dbug = false;

(async () => {
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
  /*let dootabase = new Database("./guilds.json")*/
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
  if (get_slash_json == true) {
  await cmnd.sync(path.join(__dirname, 'guilds.json'))
  }    //hello :) hehe
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

  if (!(get_slash_json == true)) {
  await icmnd.sync(s4d.client, dbug)
  }

    ticket.start(s4d.client, 'local');
  
    console.log('Logged in as "' + s4d.client.user.username + '"')

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
            embed.setFooter(('Page 1/' + String(maxpages)));
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
            embed.setFooter(('Page event/' + String(maxpages)));
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
                    description: ('**Games**' +
                        '\n' +
                        '/aki - play akinator' +
                        '\n\n' +
                        '**Others**' +
                        '\n' +
                        '/s4d - gives link for the specified preview (implemented in s4d faq bot)' +
                        '\n\n' +
                        '**Tickets**' +
                        '\n' +
                        '/ticketset channel:#channel - set channel to ticket channel' +
                        '\n' +
                        '/ticketclose - closes ticket (send in open ticket)' +
                        '\n' +
                        '/ticketarchive - archive ticket (send in open ticket)' +
                        '\n' +
                        '/ticketunarchive - unarchives an archived ticket (send in archived ticket)' +
                        '\n' +
                        'more soon' +
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
            icmnd.invite(interaction, Discord);
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
        if ((interaction.commandName) == 'aki') {
            icmnd.aki(interaction, akinator)
        }
        if ((interaction.commandName) == 'beg') {
          icmnd.beg(interaction, s4d, mathRandomInt, MessageEmbed);
        }
    });


    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (!((s4dmessage.author).bot)) {
            if (((s4dmessage.channel).type) == 'DM' || (s4dmessage.channel).type == "GUILD_TEXT") {
                arguments2 = (s4dmessage.content).split(' ');
                commandwithprefix = arguments2.splice(0, 1)[0];

                if (case_sensitive == true) {
                    thing = (commandwithprefix || '').startsWith(prefix);
                } else if (case_sensitive == false) {
                    thing = (commandwithprefix.toLowerCase() || '').startsWith(prefix.toLowerCase());
                }

                if (thing) {
                    command = commandwithprefix.slice(((prefix.length + 1) - 1), commandwithprefix.length);

                    if (command == 'help') {
                        cmnd.help(s4dmessage, prefix, delay)
                    }
                    if (command == 'eval') {
                        if ((s4dmessage.author.id) == ownerid) {
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
                        cmnd.aki(s4dmessage, akinator, MessageActionRow, MessageButton, delay)
                    }
                    if (command == 'snake') {
                        cmnd.snake(s4dmessage, Snake, colourRandom)
                    }
                    if (command == "calc") {
                        cmnd.calc(s4dmessage, Calculator, colourRandom)
                    }
                    if (command == 'invite') {
                        cmnd.invite(s4dmessage, Discord)
                    }

                    if (command == 'beg') {
                        cmnd.beg(s4dmessage, s4d, mathRandomInt)
                    }


                    if (command == 'bal') {
                        cmnd.bal(s4dmessage, s4d, arguments2, MessageEmbed)
                    }


                    if (command == 'inv') {
                        cmnd.inv(s4dmessage, s4d, savedInvList, Discord)
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
                  if (command == 'test') {
                    
                  }
                }
            }
        }
    });
    keepAlive()
    return s4d
})();