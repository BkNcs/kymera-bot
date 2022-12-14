const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Builds',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('builds').setPlaceholder('Selecciona una opci贸n').addOptions(
				{
					label: 'Facci贸n Caerleon',
          description: 'Composici贸n para Caerleon outpost',
					value: 'caerleon',
					emoji: '馃惡',
				},
				{
					label: 'Ganking',
          description: 'Composici贸n para gankear en open world',
					value: 'gank',
					emoji: '<:gank:1055567880646832229>',
				},
				{
					label: 'Crystal 5V5',
          description: 'Composici贸n para Crystals GvG 5V5',
					value: 'roaming',
					emoji: '<:gvg:1055565301531562004>',
				},
				{
					label: 'Magos embotelladores',
          description: 'Composici贸n para puestos de magos embotelladores',
					value: 'magos',
					emoji: '<:embotelladas:1042738321643814932>',
				},
        {
					label: 'Avalonianas',
           description: 'Composici贸n para mazmorras avalonianas',
					value: 'avalonianas',
					emoji: '<:avaloniana:1042749185604210748>',
				}
			)
		);

		const embed = new EmbedBuilder()
			
			.setColor("#057DD2")
			.setDescription(
				'<:escudo:1052552686593122334> Aqu铆 encontrar谩s informaci贸n importante sobre la **composici贸n de builds** que usamos para cada actividad. Si crees que existen errores o siemplemente quieres sugerir cambios o agregar nuevas composiciones, contacta con <@&1015942996455325719> o <@&1015944979136389190>\n'
			)
			.setImage('https://i.imgur.com/AmVXeJg.png');

		await msg.channel.send({
			content: '鉅?鉅?鉅?鉅?鉅?鉅?鉅?鉅?\n<:ayuda:1045652052400939078>  **AYUDA SOBRE BUILDS Y COMPOSICIONES:**\n鉃? 煤ltima actualizaci贸n 22/12/2022\n鉅?鉅?鉅?鉅?鉅?鉅?鉅?鉅?鉅?鉅?鉅?鉅?鉅?',
			ephemeral: true,
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
