async function invite(s4dmessage, Discord){
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
module.exports = invite
console.log("loaded invite.js")