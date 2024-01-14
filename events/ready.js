const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client, message) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		console.log(message)

	},
};