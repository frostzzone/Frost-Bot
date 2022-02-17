async function help(s4dmessage, prefix, delay){
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
module.exports = help
console.log("loaded help.js")