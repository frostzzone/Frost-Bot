const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('beg')
	.setDescription('beg for money');
module.exports = {data}