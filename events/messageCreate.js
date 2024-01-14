const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(interaction) {
		if (interaction.author.bot) return;
		if (interaction.content != 'påske') return;

		console.log(interaction.content)

		// Send a message to execute the other bot's slash command
		const readline = require('readline');

		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		function collectInput() {
			rl.question('Write as King Bob: ', (userInput) => {
				if (userInput.toLowerCase() === 'exit') {
					rl.close(); // Exit the loop if the user types "exit"
				} else {
					interaction.channel.send(userInput);
					collectInput(); // Continue collecting input in an infinite loop
				}
			});
		}

		collectInput(); // Start collecting input
	},
};