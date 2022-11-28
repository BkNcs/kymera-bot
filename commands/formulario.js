const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'formulario',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId('formulario')
				.setLabel('Rellenar formulario 📝')
				.setStyle(ButtonStyle.Success)
		);

		const embed = new EmbedBuilder()
			.setColor('#FFCA38')
			.setDescription(
				'\n\n `📝` Para acceder al formulario pulsa en el botón de abajo. El equipo de reclutadores leerá tu solicitud y te atenderá cuanto antes.\n\n`⚠️` Es obligatorio que tu nombre de Albion Online sea el mismo que utilices en nuestro discord y que esté correctamente escrito.\n'
			);

		await msg.channel.send({
			content: 'ㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
