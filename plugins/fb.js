const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fg = require('api-dylux')

cmd({  
    pattern: "fb",
    react: "🔄️",
    alias: ["facebook"],
    desc: "Facebook video downloader main",
    category: "download",
    use: '.fb',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('❗ *Please enter Facebook video Link*')
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}
const fbdsl = await fg.fbdl(q)
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}

const msg = await conn.sendMessage(from, { video: {url: fbdsl.videoUrl }, caption: `*${fbdsl.title}*` }, { quoted: mek }) 
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
await conn.sendMessage(from, { react: { text: "📹", key: msg.key }})
}
} catch (e) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⛔️`, key: mek.key }})
}

reply('⛔ *Sorry ! Error detected*\n\n```' + e + '```' )
l(e)
}
})

