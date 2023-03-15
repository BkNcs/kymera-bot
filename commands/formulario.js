const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'formulario',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId('formulario')
				.setLabel('En construcción')
				.setStyle(ButtonStyle.Success)
      .setDisabled(true),
		);

		const embed = new EmbedBuilder()
			.setColor("#057DD2")
			.setDescription(
				'\n\n<:community:1076529619211124766> Si estás interesado en formar parte de **nuestra comunidad**, tienes ganas de ampliar tus conocimientos en PvP, y eres un jugador activo con ganas de aprender, lo único que tienes que hacer es **rellenar el formulario de ingreso.**\n\n<:decalogo:1050727155908223016> Antes de seguir con el proceso de reclutamiento es necesario que hayas leído el <#1085547437239849010> para tener un conocimiento previo sobre el **funcionamiento interno** de Hydra y sus **normas básicas.**\n\n ┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n<:requisitos:1050724589661061130>  **REQUISITOS MÍNIMOS PARA SER MIEMBRO**\n\n➠ **Horario europeo** (CEST, UTC +2)\n➠ **Jugador PVP mayormente**, con ganas de aprender y mejorar\n➠ **Persona activa** y con aportación al gremio\n\n ┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n✉️ **Si ya has rellenado el formulario**, contacta con un <@&1016042908257894460> en el canal habilitado <#1015941287310016604> para la **formalización de la entrevista, rol y permisos en discord.**\n'
			)
    .setImage('https://i.imgur.com/Lf9gZwy.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **BIENVENIDO AL SISTEMA DE RECLUTAMIENTO**\n➥ Si ya has rellenado el formulario menciona a un reclutador en el canal <#1015941287310016604>\nㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
