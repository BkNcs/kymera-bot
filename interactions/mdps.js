const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'mdps',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		let rol = "1076850600391749642";
		interaction.member.roles.add(rol);
		return interaction.reply({ content: `Se te ha añadido el rol <@&1076850600391749642> satisfactoriamente`, ephemeral: true })
  }
  
};