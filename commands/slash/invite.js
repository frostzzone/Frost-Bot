async function invite(interaction, Discord){
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
module.exports = invite