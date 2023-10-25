const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "script",
    react: "🧭",
    alias: ["sc"],
    desc: "Cyber-X Bot Script",
    category: "main",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`*CYBER-X 2.0 WHATSAPP USER BOT* 💫

_This is the result of our team's hard work and our team owns the bot's rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances._

*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰʟᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* 

https://github.com/darkalphaxteam/CYBER-X-WHATSAPP-BOT

☘ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ᴏᴜʀ ᴘʀᴏᴊᴇᴄᴛ

*ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰꜰɪᴄɪᴀʟ*
*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ᴛᴇᴀᴍ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})



