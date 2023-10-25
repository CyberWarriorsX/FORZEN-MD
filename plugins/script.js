const config = require('../lib')
const { cmd, commands } = require('../lib')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "script",
    react: "🧭",
    alias: ["sc"],
    desc: "FORZEN-MD Script",
    category: "main",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`*FORZEN-MD WHATSAPP USER BOT* 💫

_This is the result of our team's hard work and our team owns the bot's rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances._

*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰʟᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* 

https://github.com/yasiyaofc/FORZEN-MD

☘ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ᴏᴜʀ ᴘʀᴏᴊᴇᴄᴛ

*ʏᴀsɪʏᴀ ᴏғᴄ*
*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ᴛᴇᴀᴍ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})



