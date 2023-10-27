const { tlang,sck,prefix,cmd } = require('../lib')
 cmd({
     pattern: "amute",
     desc: "sets auto mute time in group.",
     category: "moderation",
 },
 async(Void, citel, text,{ isCreator }) => {
     if (!isCreator) return citel.reply(tlang().owner)
     if(!citel.isGroup) return citel.reply(tlang().group)
     if(!text.split(':')[1]) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
     //if(!Number.isInteger(text.split(':')[0])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
     //if(!Number.isInteger(text.split(':')[1])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
           let Group = await sck.findOne({ id: citel.chat })
             if (!Group) {
                 await new sck({ id: citel.chat, mute: text }).save()
                 return citel.reply('Mute added.')
             } else {
                 await await sck.updateOne({ id: citel.chat }, { mute:text })
                 return citel.reply(`_Mute added for ${text} successfully._

❄️ *_ғᴏʀᴢᴇɴ ᴍᴅ_* ❄️
👨‍🔧 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʏᴀsɪʏᴀᴏғᴄ ᴀɴᴅ ɪɴᴅᴜᴡᴀʀᴀ_* 👨‍🔧`)     
             }      
 }
 )

 //--------------------------------------------------------------------------------
 cmd({
    pattern: "aunmute",
    desc: "sets unmute time in group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
    if(!text.split(':')[0]) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
   // if(!Number.isInteger(text.split(':')[0])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
   // if(!Number.isInteger(text.split(':')[1])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, unmute: text }).save()
                return citel.reply('Mute added.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { unmute:text })
                return citel.reply(`_Unmute updated for ${text} successfully._

❄️ *_ғᴏʀᴢᴇɴ ᴍᴅ_* ❄️
👨‍🔧 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʏᴀsɪʏᴀᴏғᴄ ᴀɴᴅ ɪɴᴅᴜᴡᴀʀᴀ_* 👨‍🔧`)
                
            }      
}
)
 //--------------------------------------------------------------------------------
 cmd({
    pattern: "dunmute",
    desc: "Delete unmute from group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                return citel.reply('There\'s no unmute set in group.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { unmute:'false' })
                return citel.reply(`Unmute deleted successfully.

❄️ *_ғᴏʀᴢᴇɴ ᴍᴅ_* ❄️
👨‍🔧 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʏᴀsɪʏᴀᴏғᴄ ᴀɴᴅ ɪɴᴅᴜᴡᴀʀᴀ_* 👨‍🔧`)
                
            }      
}
)
 //--------------------------------------------------------------------------------
 cmd({
    pattern: "dmute",
    desc: "Delete mute from group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                return citel.reply('There\'s no mute set in group.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { mute:'false' })
                return citel.reply(`Mute deleted successfully.

❄️ *_ғᴏʀᴢᴇɴ ᴍᴅ_* ❄️
👨‍🔧 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʏᴀsɪʏᴀᴏғᴄ ᴀɴᴅ ɪɴᴅᴜᴡᴀʀᴀ_* 👨‍🔧`)
                
            }      
}
)
 //--------------------------------------------------------------------------------
