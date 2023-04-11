import * as dotenv from "dotenv";
dotenv.config();
import { REST, Routes } from "discord.js";

const rest = new REST().setToken(process.env.BOT_TOKEN);



// for guild-based commands
rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, "1089975159022166137"), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);