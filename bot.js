// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
    
  if (message.content.substr(0,2) == "Sil") {
    if (message.content.substr(4) == "help") { message.reply("Undergoing testing lmao we dont have any commands")} else if (message.content.substr(4) == "test"){
     message.reply("hear you loud and clear");}
   
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('NzcyNDUzNDI0NzEyNTE1NTg0.X565Tw.x1chLl4pc1nfpvqpdWQmYkaFJ_8');
3z0mW9VhfDwr0nz4');
