import * as dotenv from "dotenv";
dotenv.config();
import { REST, Routes, ApplicationCommandOptionType } from "discord.js";

const commands = [
  {
    name: "add",
    description: "adds two numbers",
    options: [
      {
        name: "first-number",
        description: "The First number",
        type: ApplicationCommandOptionType.Number,
      },
      {
        name: "second-number",
        description: "The Second number",
        type: ApplicationCommandOptionType.Number,
      }
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");
    await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

    console.log("Slash commands registered");
  } catch (error) {
    console.log(`ERROR:${error}`);
  }
})();
