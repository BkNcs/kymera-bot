const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'normativa',
	description: 'Normativa',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('normativa').setPlaceholder('Seleccionar una opciÃ³n').addOptions(
				{
					label: 'Normativa General',
					value: 'general',
					emoji: 'ð',
				},
				{
					label: 'Normativa Caerleon',
					value: 'ncaerleon',
					emoji: 'ð',
				},
				{
					label: 'Normativa Fama',
					value: 'nfama',
					emoji: 'ð',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setTitle('ã¤ã¤ã¤           â®â®    NORMATIVA KYMERA    â¯â¯  ã¤ã¤ã¤âââââââââââââââââââââââââ')
			.setColor('386CE5') //
			.setDescription(
				'\n\n> `ð` Todos los miembros del gremio tienen el deber de respetar las normas generales en el desarrollo de las actividades del gremio, de lo contrario, el equipo de administraciÃ³n tomarÃ¡ medidas dependiendo del grado de desobediencia\n'
			)
			.setImage('https://i.imgur.com/gc6xe6k.png');

		await msg.channel.send({
			content: 'ã¤    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
