import { config } from "dotenv";
config();
import {
  Client,
  Collection,
  GatewayIntentBits,
  Events,
  REST,
  Routes,
} from "discord.js";
import { command } from "./commands/ping.js";
import { join } from "path";
import { readdirSync } from "fs";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
});

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

client.on("ready", async () => {
  console.log(client.user.username + " Succesfully Logged Into ");
});
client.on("messageCreate", async (message) => {
  if (message.author.username == "test-bot") {
    return;
  }
  console.log("message: " + message.content);
  console.log(message.author.username);
  message.reply("HA gayy");
});

async function main() {
  const commands = [
    {
      name: "tutorial",
      description: "JEst testing fam",
    },
  ];

  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.APLICATION_ID,
        process.env.GUILD_ID
      ),
      {
        body: commands,
      }
    );
    console.log("Commands has been added");
  } catch (error) {
    console.log(error);
  }
}

main();

client.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=index.js.map
