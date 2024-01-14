const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('convert_dkk')
        .setDescription('Convert DKK TO USD.')
        .addStringOption((options) => options
            .setName('amount')
            .setDescription('amount of money in DKK.')
            .setRequired(true)),
    async execute(interaction) {
        const embed = new EmbedBuilder();

        if (isNaN(interaction.options.getString('amount'))) {
            embed.setTitle(`Convertion failed, didn't enter a number!`);

            embed.setDescription(`You must enter a valid number...`);

            interaction.reply({ ephemeral: true, embeds: [embed] });
        }
        else {
            let convertedAmount = Number(Number(interaction.options.getString('amount')) / Number(7)).toFixed(2);

            embed.setTitle(`:moneybag: ${interaction.options.getString('amount')} DKK is equal to ${convertedAmount} USD :moneybag:`);

            interaction.reply({ ephemeral: false, embeds: [embed] });
        }
    },
};