require('dotenv').config();
const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Criando duas instâncias do bot com tokens diferentes
const bot1 = new Eris(process.env.token1);
const bot2 = new Eris(process.env.token2);

bot1.on("error", (err) => {
  console.error("Bot 1 error:", err); // ou seu logger preferido
});

bot2.on("error", (err) => {
  console.error("Bot 2 error:", err); // ou seu logger preferido
});

bot1.on("ready", () => {
  console.log("Bot 1 is ready!");
});

bot2.on("ready", () => {
  console.log("Bot 2 is ready!");
});

// Conectando os bots ao Discord
bot1.connect();
bot2.connect();
