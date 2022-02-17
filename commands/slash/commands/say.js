const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('say')
	.setDescription('Repeat everything after say')
	.addStringOption(option =>
		option.setName('text')
			.setDescription('Send this')
			.setRequired(true));
module.exports = {data}