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
  if (message.content === 'spam') {
    // Send the user's avatar URL
      var i;
      while (i!=10){ message.reply("Hw is a rhinoceros"); i++;}
   
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('NzcyNDUzNDI0NzEyNTE1NTg0.X565Tw._SiCQrkyEVu3z0mW9VhfDwr0nz4');
