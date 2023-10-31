const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')
const Heroku = require('heroku-client')
const db_pool = new DBM({
    db: config.DATABASE_URL
})

const heroku = new Heroku({
    token: config.HEROKU_API_KEY
})

cmd({
    pattern: "restart",
    react: "⚙",
    alias: ["rstrt"],
    desc: "Restart the Bot",
    category: "main",
    use: '.restart',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
    if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
    await conn.sendMessage(from , { text: '*Restarting the Bot....*' }, { quoted: mek } )
    let baseURI = '/apps/' + config.HEROKU_APP_NAME
    await heroku.delete(baseURI + '/dynos')
} catch (e) {
    reply('⛔ *Error accurated !!*'+ e )
    l(e)
    }
    })

    cmd({
        pattern: "shutdown",
        react: "⚙",
        alias: ["sdown"],
        desc: "Shutdown the Bot",
        category: "main",
        use: '.shutdown',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
    try{
        if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
        await conn.sendMessage(from , { text: '*Shutting Down the Bot....*' }, { quoted: mek } )
        let baseURI = '/apps/' + config.HEROKU_APP_NAME
       const form = await heroku.get(baseURI + '/formation')
       forID = form[0].id
       await heroku.patch(baseURI + '/formation/' + forID, {
        body: {
            quantity: 0
        }
    })
    } catch (e) {
        reply('⛔ *Error accurated !!*'+ e )
        l(e)
        }
        })


        cmd({
            pattern: "autoreact",
            react: "⚙",
            alias: ["autor"],
            desc: "AUTO REACT Swith of the Bot",
            category: "main",
            use: '.autoreact on/off',
            filename: __filename
        },
        async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
        try{
            if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
            if ( !q ) return reply("*Enter on or off to AUTO REACT* ")
            if ( q !== 'on' ) {
                 if ( q !== 'off') return reply("*Enter on or off to AUTO REACT* ") 
                }
            let baseURI = '/apps/' + config.HEROKU_APP_NAME
            if ( q == 'on') {
                if  (config.AUTO_REACT == "true" ) return reply("*Already turned "+ q + "*")
                 await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['AUTO_REACT']: 'true'
                    }
                });
                await conn.sendMessage(from , { text: '*AUTO REACT Turned On ! Please wait to Update the Bot....*' }, { quoted: mek }) 
                 return await heroku.delete(baseURI + '/dynos')
            }
            if ( q == 'off') {
                if  (config.AUTO_REACT == "false" ) return reply("*Already turned "+ q + "*")
                await heroku.patch(baseURI + '/config-vars', {
                   body: {
                       ['AUTO_REACT']: 'false'
                   }
               })
                await conn.sendMessage(from , { text: '*AUTO REACT Turned Off ! Please wait to Update the Bot....*' }, { quoted: mek })
               return await heroku.delete(baseURI + '/dynos')
           }
        } catch (e) {
            reply('⛔ *Error accurated !!*'+ e )
            l(e)
            }
            })

            cmd({
                pattern: "antilink",
                react: "⚙",
                alias: ["anlk"],
                desc: "AUTO REACT Swith of the Bot",
                category: "main",
                use: '.antilink on/off',
                filename: __filename
            },
            async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
            try{
                if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
                if ( !q ) return reply("*Enter on or off to ANTI LINK* ")
                if ( q !== 'on' ) {                  
                     if ( q !== 'off') return reply("*Enter on or off to ANTI LINK* ") 
                    }
                let baseURI = '/apps/' + config.HEROKU_APP_NAME
                if ( q == 'on') {
                    if  (config.ANTI_LINK == "true" ) return reply("*Already turned "+ q + "*")
                     await heroku.patch(baseURI + '/config-vars', {
                        body: {
                            ['ANTI_LINK']: 'true'
                        }
                    });
                    await conn.sendMessage(from , { text: '*ANTI LINK Turned On ! Please wait to Update the Bot....*' }, { quoted: mek }) 
                    return await heroku.delete(baseURI + '/dynos')
                }
                if ( q == 'off') {
                    if  (config.ANTI_LINK == "false" ) return reply("*Already turned "+ q + "*")
                    await heroku.patch(baseURI + '/config-vars', {
                       body: {
                           ['ANTI_LINK']: 'false'
                       }
                   })
                   await conn.sendMessage(from , { text: '*ANTI LINK Turned Off ! Please wait to Update the Bot....*' }, { quoted: mek })
                   return await heroku.delete(baseURI + '/dynos')
               }
            } catch (e) {
                reply('⛔ *Error accurated !!*'+ e )
                l(e)
                }
                })

                cmd({
                    pattern: "antibad",
                    react: "⚙",
                    alias: ["antbd"],
                    desc: "ANTI BAD Swith of the Bot",
                    category: "main",
                    use: '.antibad on/off',
                    filename: __filename
                },
                async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
                try{
                    if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
                    if ( !q ) return reply("*Enter on or off to ANTI BAD* ")
                    if ( q !== 'on' ) {                    
                         if ( q !== 'off') return reply("*Enter on or off to ANTI BAD* ") 
                        }
                    let baseURI = '/apps/' + config.HEROKU_APP_NAME
                    if ( q == 'on') {
                        if  (config.ANTI_BAD == "true" ) return  reply("*Already turned "+ q + "*")
                         await heroku.patch(baseURI + '/config-vars', {
                            body: {
                                ['ANTI_BAD']: 'true'
                            }
                        });
                        await conn.sendMessage(from , { text: '*ANTI BAD Turned On ! Please wait to Update the Bot....*' }, { quoted: mek }) 
                        return await heroku.delete(baseURI + '/dynos')
                    }
                    if ( q == 'off') {
                        if  (config.ANTI_BAD == "false" ) return reply("*Already turned "+ q + "*")
                        await heroku.patch(baseURI + '/config-vars', {
                           body: {
                               ['ANTI_BAD']: 'false'
                           }
                       })
                       await conn.sendMessage(from , { text: '*ANTI BAD Turned Off ! Please wait to Update the Bot....*' }, { quoted: mek })
                       return await heroku.delete(baseURI + '/dynos')
                   }
                } catch (e) {
                    reply('⛔ *Error accurated !!*'+ e )
                    l(e)
                    }
                    })


                    cmd({
                        pattern: "mode",
                        react: "⚙",
                        alias: ["worktype"],
                        desc: "Work Type Swith of the Bot",
                        category: "main",
                        use: '.mode private/public or only_group',
                        filename: __filename
                    },
                    async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
                    try{
                        if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
                        if ( !q ) return reply("*Enter you wont WORK_TYPE* ")
                        if ( q !== 'private' ) {                    
                             if ( q !== 'public') {
                                if ( q !== 'only_group') return reply("*Enter private , public or only_group* ") 
                            }
                        }
                        let baseURI = '/apps/' + config.HEROKU_APP_NAME
                        if ( q == 'private') {
                            if  (config.WORK_TYPE == "private" ) return  reply("*Already bot in "+ q + "*")
                             await heroku.patch(baseURI + '/config-vars', {
                                body: {
                                    ['WORK_TYPE']: 'private'
                                }
                            });
                            await conn.sendMessage(from , { text: '*WORK_TYPE = private ! Please wait to Update the Bot....*' }, { quoted: mek }) 
                            return await heroku.delete(baseURI + '/dynos')
                        }
                        if ( q == 'public') {
                            if  (config.WORK_TYPE == "public" ) return reply("*Already bot in "+ q + "*")
                            await heroku.patch(baseURI + '/config-vars', {
                               body: {
                                   ['WORK_TYPE']: 'public'
                               }
                           })
                           await conn.sendMessage(from , { text: '*WORK_TYPE = public ! Please wait to Update the Bot....*' }, { quoted: mek })
                           return await heroku.delete(baseURI + '/dynos')
                       }
                       if ( q == 'only_group') {
                        if  (config.WORK_TYPE == "only_group" ) return reply("*Already bot in "+ q + "*")
                        await heroku.patch(baseURI + '/config-vars', {
                           body: {
                               ['WORK_TYPE']: 'only_group'
                           }
                       })
                       await conn.sendMessage(from , { text: '*WORK_TYPE = only_group ! Please wait to Update the Bot....*' }, { quoted: mek })
                       return await heroku.delete(baseURI + '/dynos')
                   }
                    } catch (e) {
                        reply('⛔ *Error accurated !!*'+ e )
                        l(e)
                        }
                        })
    







