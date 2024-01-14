const answers = [
    "Ok, whatever yes.",
    "No, but you're def stupid.",
    "Yes.",
    "No.",
    "Sorry but I'm busy with your mom! :hot_face:",
    "What kind of trash question is that?",
    "Once you grow a braincell, yes.",
    "Is trump's skin orange?",
    "Sure, I literally couldn't care less.",
    "Hell to the yes.",
    "Never, dumbass.",
    "Yes, idiot.",
    "Ok, whatever yes.",
    "Honestly I don't care lol.",
    "I'm an 8ball, not a deal with ur shit ball.",
    "I can tell you certainly, no. :joy:",
    "Idiot.",
    "Yes???",
    "Ok, whatever yes.",
    "Honestly I don't care :rofl:",
    "Well, slap my ass and call me Sally, of course.",
    "No!!!!",
    "I can tell you certainly, no. :smirk:",
    "Heck off, you know that's a no.",
    "King Bob!!!",
    "Without a doubt.",
    "Most likely.",
    "Don't count on it.",
    "In general I love bitches, but I gotta say... you're the bitchiest bitch I ever met.",
    "Shut the f up douchebag...",
    "I love you bitch *strum* ain't never gonna stop lovin' you, bitch *strum*.",
    "I don't love bitches.",
    "Banana.",
    "What are you gay?",
    "Stfu bitch!",
    "I love you. :hearts:",
    "That’s what she said.",
    "This isn’t Burger King you can’t have it your way.",
    "Whatever you like. :lying_face:",
    "Stop talking to me idiot...",
    "Sorry I'm gaming... try again later. :video_game:",
    "Give me nudes please. :smirk:",
    "PrivateDonut is #1 bitches, you know it so stfu"

]

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Ask the magic 8ball a question.')
        .addStringOption((options) => options
            .setName('question')
            .setDescription('The question you want to ask the magic 8ball.')
            .setRequired(true)),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle(interaction.options.getString('question'));

        let answer = ":8ball: " + answers[Math.floor(Math.random() * answers.length)];

        console.log(answer);

        embed.setDescription(answer);

        interaction.reply({ ephemeral: false, embeds: [embed] });
    },
};