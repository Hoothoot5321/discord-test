import { SlashCommandBuilder } from "discord.js";

let data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

const execute = async (interaction) => {
  await interaction.reply("Pong!");
};

export let command = { data: data, execute: execute };
