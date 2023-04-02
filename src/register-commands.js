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
                required: true,
            },
            {
                name: "second-number",
                description: "The Second number",
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
    },
    {
        name: "poll",
        description: "create an embed with reactions",
        options: [
            {
                name: "title",
                description: "title of the poll",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "description",
                description: "description of the poll",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "first-option",
                description: "name of the first option",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "second-option",
                description: "name of the second option",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "third-option",
                description: "name of the third option",
                type: ApplicationCommandOptionType.String,
                required: false
            },
            {
                name: "fourth-option",
                description: "name of the fourth option",
                type: ApplicationCommandOptionType.String,
                required: false
            },
            {
                name: "fith-option",
                description: "name of the fourth option",
                type: ApplicationCommandOptionType.String,
                required: false
            },
            {
                name: "sixth-option",
                description: "name of the fourth option",
                type: ApplicationCommandOptionType.String,
                required: false
            },
        ],
    },
];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

export async function RegisterCommands() {
    try {
        console.log("Registering slash commands...");
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

        console.log("Slash commands registered");
    } catch (error) {
        console.log(`ERROR:${error}`);
    }
};