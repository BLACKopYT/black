const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "  *SEND GN GM Wish With Image* "

 if (Config.WORKTYPE == 'public') {
  
  Trex.addrex({ pattern: 'gm', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'ππΆπππ π»πππππππ π₯°\Have a nice day Be happy π'  ,quoted: message.data})

    }));
  
  Trex.addrex({ pattern: 'gn', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'πααͺαͺα πααααΌα’ π«β¨\n\Good night β Good nightπ€­'  ,quoted: message.data})

    }));
 
  Trex.addrex({ pattern: 'gn', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'πααͺαͺα πααααΌα’ π«β¨\n\Good night β Good night π€­' })
    
    }));
 
 Trex.addrex({ pattern: 'gm', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'ππΆπππ π»πππππππ π₯°\n\Have a nice day β  Be happy π' })

    }));
   }
else if (Config.WORKTYPE == 'private') {
 
 Trex.addrex({ pattern: 'gn', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] ==='' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'πααͺαͺα πααααΌα’ π«β¨\n\Good night β  Good to sleep wellπ€­' })

    

    }));

 

 Trex.addrex({ pattern: 'gm', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'ππΆπππ π»πππππππ π₯°\n\Have a nice day β  Be happy π' })

    }));
 }
