const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('help')
	.setDescription('Get a help message');
module.exports = {data}