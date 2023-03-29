import * as dotenv from 'dotenv';
dotenv.config()
import { Client, IntentsBitField } from "discord.js";

const client = new Client ({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
]})

client.login(process.env.BOT_TOKEN)