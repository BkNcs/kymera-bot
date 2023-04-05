const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'informacion',
	description: 'Informacion',
	execute: async (msg) => {
		
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('facc')
					.setLabel('¿En qué consiste la actividad Caerleon Facción?')
					.setStyle(ButtonStyle.Secondary),
       
			)
    .addComponents(
    new ButtonBuilder()
					.setCustomId('roaming')
					.setLabel('¿En qué consiste la actividad Roaming?')
					.setStyle(ButtonStyle.Secondary),
       
			)
    .addComponents(
    new ButtonBuilder()
					.setCustomId('teest')
					.setLabel('¿En qué consiste la actividad Ganking?')
					.setStyle(ButtonStyle.Secondary),
      )
      .addComponents(
    new ButtonBuilder()
					.setCustomId('ava')
					.setLabel('¿En qué consiste la actividad Avalonianas?')
					.setStyle(ButtonStyle.Secondary),
       
       
			);
	
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
      
    })
await msg.channel.send({
			content: 'https://i.imgur.com/6Qfpxtv.png',
  
  })

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n <:opcion:1076525812930576403> __**Lista de actividades grupales:**__\n\n - <@$1020635840327729196> (Rol obligatorio para reequip)\n - <@$1020636374589788190> (Rol obligatorio para reequip)\n - <@$1057997504655921183> (Rol obligatorio para asistencia)\n - GANKING (Zona negra)\n\n <:portal:1050583981608943676> **__¿Dónde realizamos la mayoría de nuestras actividades grupales?__** \n ‎➥ Actualmente nuestro contenido y actividades grupales se enfocan en el portal de **[PORTAL]**.',
     			})
    
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
			
        			})
    
await msg.channel.send({
			content: 'https://i.imgur.com/ckNOrso.png',
				})

       			
    
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
			
        			})
    
await msg.channel.send({
			components: [row],
		});

		await msg.delete();
	},
};
