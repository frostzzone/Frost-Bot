const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('invite')
	.setDescription('My invite link');
module.exports = {data}