import { config } from "dotenv";
config();
import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
});



client.on("ready", async () => {
  console.log(client.user.username + " " + client.application);
  const channel = client.channels.cache.get("1061086997319520317");

});

client.on("messageCreate", async (message) => {
  if (message.author.username == "test-bot") {
    return;
  }

  console.log("message: " + message.content);
  console.log(message.author.username);
  message.reply("HA gayy");
});

client.login(process.env.DISCORD_TOKEN);
