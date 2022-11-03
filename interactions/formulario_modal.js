const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const { canal_formulario } = require('../data/db.json');

module.exports = {
	name: 'formulario',
	description: 'Formulario modal',
	execute: async (interaction) => {
		if (!canal_formulario) {
			return await interaction.reply({
				content: '🔴 ERROR: El canal para mandar formularios no esta configurado, contacta con BkNcs2 o Poak',
				ephemeral: true,
			});
		}

		const modal = new ModalBuilder().setCustomId('formulario_modal').setTitle('Formulario');

		const nombreInput = new TextInputBuilder()
			.setCustomId('pregunta_nombre')
			.setLabel('Nombre de tu personaje en Albion')
			.setStyle(TextInputStyle.Short);

		const horarioInput = new TextInputBuilder()
			.setCustomId('pregunta_horario')
			.setLabel('¿Resides en España?')
			.setStyle(TextInputStyle.Short);

		const contenidoInput = new TextInputBuilder()
			.setCustomId('pregunta_contenido')
			.setLabel('¿Qué contenido quieres hacer en Kymera?')
			.setPlaceholder('PvP, PvE, Roaming, Caerleon, etc')
			.setStyle(TextInputStyle.Short);

		const guildInput = new TextInputBuilder()
			.setCustomId('pregunta_guild')
			.setLabel('¿Cuál es tu anterior gremio?')
			.setStyle(TextInputStyle.Short);

		const rolInput = new TextInputBuilder()
			.setCustomId('pregunta_rol')
			.setLabel('Rol principal, secundario y armas usadas/spec')
			.setStyle(TextInputStyle.Paragraph);

		const actionRow1 = new ActionRowBuilder().addComponents(nombreInput);
		const actionRow2 = new ActionRowBuilder().addComponents(horarioInput);
		const actionRow3 = new ActionRowBuilder().addComponents(contenidoInput);
		const actionRow4 = new ActionRowBuilder().addComponents(guildInput);
		const actionRow5 = new ActionRowBuilder().addComponents(rolInput);

		modal.addComponents(actionRow1, actionRow2, actionRow3, actionRow4, actionRow5);

		return await interaction.showModal(modal); // FIX CLOSE MODAL
	},
};
