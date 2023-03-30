import * as dotenv from "dotenv";
dotenv.config();
import { Client, IntentsBitField } from "discord.js";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('messageCreate', (message) => {
  if(!message.author.bot) {
    if (message.content.includes('morning')) {
      message.reply("Morning!")
    }
    
  };


});

client.on('interactionCreate', (interaction) => {
  if(!interaction.isChatInputCommand()) return;

  if (interaction.commandName == "hey") {
    interaction.reply('hey!')
  } else if (interaction.commandName == "ping") {
    interaction.reply('pong!')
  }
});