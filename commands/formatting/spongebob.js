require('dotenv').config();

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spongebob')
        .setDescription('Write your spongebob message!')
        .addStringOption((options) => options
            .setName('message')
            .setDescription('wRiTe YoUr MeSsAgE.')
            .setRequired(true)),
    async execute(interaction) {
        const embed = new EmbedBuilder();

            let msgChars = Array.from(interaction.options.getString('message'))

            var evenNumber = true
            var newMessage = ""
            var regex = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
            for (var i = 0; i < msgChars.length; i++)
            {
                if (regex.test(msgChars[i]))
                {
                    newMessage += msgChars[i]
                    continue
                }
    
                if (!evenNumber)
                {
                    newMessage += msgChars[i].toUpperCase()
                    evenNumber = !evenNumber
                    continue 
                }
    
                newMessage += msgChars[i].toLowerCase()
                evenNumber = !evenNumber
            }

            embed.setDescription(newMessage);
            
            interaction.reply(newMessage);
    },
};