const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const wabetainfo = require('wabetainfo')
const api = require("caliph-api")
let { img2url } = require('@blackamda/telegram-image-url')
const fs = require('fs')

cmd({
    pattern: "hmods",
    react: "🔎",
    alias: ["happymods"],
    desc: "Happymod apk Searcher",
    category: "search",
    use: '.hmods < Query >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('🖊️ *Please type a App name for search*')
const vid = await api.search.happymod(q)
    let yt = '\n❍⚯────────────────────⚯❍\n   🎲 *𝙷𝙰𝙿𝙿𝚈 𝙼𝙾𝙳𝚂 𝙰𝙿𝙺 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🎲\n      ⚡ *ᴄʏʙᴇʀ x ʜ ᴍᴏᴅꜱ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.result ) {
        yt += `📬 *Title - ${i.title}* \n🔗 _Url : ${i.link}_\n\n\n`
    }
 await conn.sendMessage(from,{image:{url: vid.result[0].thumb },caption: yt + "*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*')
l(e)
}
})


cmd({
    pattern: "cinesubz",
    react: "🔎",
    alias: ["slmovie","csubz"],
    desc: "Cinesubs Movie Searcher",
    category: "search",
    use: '.cinesubz < Query >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('🖊️ *Please type a Movie name for search*')
const vid = await fetchJson(`https://sparkling-teddy-deer.cyclic.app/api/search/movie?name=${q}&apikey=tinusha`)
    let yt = '\n❍⚯────────────────────⚯❍\n   🎬 *𝙲𝙸𝙽𝙴𝚂𝚄𝙱𝚉 𝙼𝙾𝚅𝙸𝙴 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🎬\n ⚡ *ᴄʏʙᴇʀ x ᴄɪɴᴇꜱᴜʙᴢ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.data ) {
        yt += `🎬 *Movie Name - ${i.title}* \n🔗 _Movie Link : ${i.url}_\n📊 IMDB Rate - ${i.extra[0].imdb}\n\n\n`
    }
 await conn.sendMessage(from,{image:{url: vid.data[0].img },caption: yt + "*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*')
l(e)
}
})

cmd({
    pattern: "img2url",
    react: "🌏",
    alias: ["uploadp","url","tourl"],
    desc: "Img Uploader",
    category: "extra",
    use: '.uploadp',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Replay a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
const imgURL = await img2url(media)
reply(`\n${imgURL}\n`)

await fs.unlinkSync(media)
} else return reply('❗ *Please mention a Image to Continue*')


} catch (e) {
reply(e)
l(e)
}
})
