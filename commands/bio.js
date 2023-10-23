const config = require('../lib')
const { cmd, commands } = require('../lib')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "team",
    react: "👨‍✈️",
    alias: ["forzen_team"],
    desc: "FORZEN MD Bot Script",
    category: "extra",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *ғᴏʀᴢᴇɴ ᴍᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ* ⚖️

👨‍✈️ *Below are the commands to get the details of the developer team of FORZEN MD.*

⭕ *Use the command you want and get the details you need*

┌──────────────────┐
│👨‍✈️ *FORZEN MD TEAM* 👨‍✈️ │
└──────────────────┘ 

📌  *.yasiya*   -  _Get the bio details of founder and owner of FORZEN MD BOT._

📌  *.induwara*     -  _Get the bio details of CO-OWNER and BUG TESTER_

❄️ *ғᴏʀᴢᴇɴ ᴍᴅ* ❄️
*🤹‍♂️ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʏᴀsɪʏᴀ ᴏғᴄ🤹‍♂️*
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "yasiya",
    react: "🤹‍♂️",
    alias: ["yasiyaofc","yasiya","owner","yasitha"],
    desc: "FORZEN MD Script",
    category: "",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *ғᴏʀᴢᴇɴ ᴍᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ* ⚖️

┌────────────────┐
│ 🤹‍♂️ *ʏᴀsɪʏᴀ ᴏғᴄ* 🤹‍♂️  │
└────────────────┘                                        

📌   *FORZEN MD හි අයිතිකරු සහ නිර්මාතෘ වේ. 👨‍💻*

📌   *He is also the owner and creator of FORZEN MD. 👨‍💻*

▬▬▬▬▬▬▬▬▬▬▬

⭕ *PERSONAL GITHUB* - https://github.com/yasiyaofc/

📳 *CONTACT MR. YASIYA* - http://wa.me/94760018802
📳 *CONTACT MR. YASIYA* - http://wa.me/94705624363

▬▬▬▬▬▬▬▬▬▬▬

*❄️ ғᴏʀᴢᴇɴ ᴍᴅ ❄️*
*🤹‍♂️ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʏᴀsɪʏᴀ ᴏғᴄ🤹‍♂️*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "induwara",
    react: "🌙",
    alias: ["mrinduwara","i","induwara"],
    desc: "FORZEN MD Bot Script",
    category: "",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *ғᴏʀᴢᴇɴ ᴍᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ* ⚖️

┌─────────────┐
│👨‍✈️ *ɪɴᴅᴜᴡᴀʀᴀ* 👨‍✈️ │
└─────────────┘                                        

📌   *FORZEN MD හි CO-OWNER සහ BUG TESTER වේ. 👨‍💻*

📌   *he is the CO-OWNER and BUG TESTER of the FORZEN MD BOT. 👨‍💻*

▬▬▬▬▬▬▬▬▬▬▬

⭕ *PERSONAL GITHUB* - https://github.com/induwaraofc

📳 *CONTACT MR.INDUWARA* - http://wa.me/94

▬▬▬▬▬▬▬▬▬▬▬

❄️ *ғᴏʀᴢᴇɴ ᴍᴅ* ❄️
*🤹‍♂️ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʏᴀsɪʏᴀ ᴏғᴄ🤹‍♂️*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})
