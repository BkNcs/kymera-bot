const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'normativa',
	description: 'Normativa',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('normativa').setPlaceholder('Seleccionar una opción').addOptions(
				{
					label: 'Normativa General',
					value: 'n_general',
					emoji: '📔',
				},
				{
					label: 'Normativa Caerleon',
					value: 'n_caerleon',
					emoji: '📕',
				},
				{
					label: 'Normativa Fama',
					value: 'n_fama',
					emoji: '📘',
				}
			)
		);
  
		const embed = new EmbedBuilder()
      
			.setTitle('ㅤㅤㅤ           ❮❮    NORMATIVA KYMERA    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor("386CE5") //
			.setDescription(
				'\n\n> `📔` Todos los miembros del gremio tienen el deber de respetar las normas generales en el desarrollo de las actividades del gremio, de lo contrario, el equipo de administración tomará medidas dependiendo del grado de desobediencia\n'
			)
			.setImage('https://i.imgur.com/gc6xe6k.png');

		await msg.channel.send({
			content: 'ㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};