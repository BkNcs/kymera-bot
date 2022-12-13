const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'isla',
	description: 'Isla',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('isla').setPlaceholder('Seleccionar una opción').addOptions(
				{
					label: 'Distribución de cofres personales',
					value: 'distribucion',
					emoji: '1022572341160587354',
				},
				{
					label: 'Sistema de repartición de loot',
					value: 'reparto',
					emoji: '1037148095160537109',
				},
				{
					label: 'Reclamar cofre personal',
					value: 'reclamar',
					emoji: '🎟️',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setColor("#057DD2")
			.setDescription(
				'<:loot:1051932396498473010> Para el reparto del loot hay disponible un cofre general donde **todos los miembros que sean <@&1016043570773381190> en adelante** podrán hacerlo sin necesidad de que haya un integrante del equipo de administración conectado.\n\n🎟️ Si aún no se te ha asignado un cofre personal y vas a hacer contenido diario, haz click en la opcion **\"Reclamar cofre personal\"** para abrir un ticket.'
			)
			.setImage('https://i.imgur.com/firgO1z.png');

		await msg.channel.send({
			content: '<:martlock:1051934577003855942>  **INFORMACIÓN IMPORTANTE SOBRE LA ISLA DE MARTLOCK:**\n➥ isla del gremio, cofres personales, sistema de reparto de loot.\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
