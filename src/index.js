import * as dotenv from "dotenv";
dotenv.config();
import { Client, IntentsBitField, EmbedBuilder } from "discord.js";
import { RegisterCommands } from "./register-commands.js"; 
RegisterCommands();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//Direct Replies
client.on("messageCreate", (message) => {
    if (!message.author.bot) {
        if (message.content.includes("morning")) {
            message.reply("Morning!");
        }
    }
});

//Commands
client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "add") {
        const num1 = interaction.options.get("first-number").value;
        const num2 = interaction.options.get("second-number").value;
        interaction.reply(`The sum of the numbers provided is ${num1 + num2}`);
    }

    if (interaction.commandName === "poll") {
        const todaysDate = new Date().toDateString().slice(0, 15);

        const emojis = ["❤️", "💛", "💚", "💙", "💜", "🧡"]

        const title = interaction.options.get("title", true)?.value;
        const discription = interaction.options.get("description", true)?.value;
        const option1 = interaction.options.get("first-option", true)?.value;
        const option2 = interaction.options.get("second-option", true)?.value;
        const option3 = interaction.options.get("third-option", false)?.value;
        const option4 = interaction.options.get("fourth-option", false)?.value;
        const option5 = interaction.options.get("fourth-option", false)?.value;
        const option6 = interaction.options.get("fourth-option", false)?.value;

        console.log(title)

        const embed = new EmbedBuilder()
            .setTitle(`${title}: ${todaysDate}`)
            .setDescription(discription)
            .setColor("Random")
            .setFields(
                { name: option1, value: emojis[0] },
                { name: option2, value: emojis[1] },
            );

            const additionalOptions = [
                {name: option3, i: 2},
                {name: option4, i: 3},
                {name: option5, i: 4},
                {name: option6, i: 5}
            ];

            additionalOptions.forEach (option => {
                if (option.name) {
                    embed.addFields({name: option.name, value: emojis[option.i]})
                }
            });

            const fields = embed.data.fields.length;

        interaction.reply({ embeds: [embed], fetchReply: true})
        .then((m) => {
          for (let i = 0; i < fields; i++) {
            m.react(emojis[i])
          }
    })
        
    }
});