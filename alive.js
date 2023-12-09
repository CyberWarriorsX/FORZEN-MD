            pattern: "alive",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
Void.sendMessage(citel.chat, { 
              react: { 
                  text: "💃", 
                  key: citel.key 
              } 
          }) 
          await Void.sendPresenceUpdate('recording', citel.chat);
          await Void.sendMessage(citel.chat, { audio: {url : 'https://raw.githubusercontent.com/-Auto-Voice-Sender/main/Hi.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
            let alivemessage = Config.ALIVE_MESSAGE || '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳`
            const alivtxt = `

┏╼[ 👨‍💻 𝐐𝐔𝐄𝐄𝐍 𝐍𝐈𝐂𝐊𝐘 𝐌𝐃 𝐕1👨‍💻]╾❋
┣⃞❑⃝🖲️⃟➤ 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 『ᴅᴜᴍɪᴅᴜ』
┣⃞❑⃝🎭⃟➤ 𝙾𝚆𝙽 𝙽𝙱 『94742443114』
┣⃞❑⃝🍁⃟➤ 𝚄𝙿𝚃𝙸𝙼𝙴 ${runtime(process.uptime())}
┣⃞❑⃝💕⃟➤ 𝙱𝚁𝙰𝙽𝙲 『${Config.BRANCH}』
┣⃞❑⃝🎩⃟➤ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 0.1

👨‍💻𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐄 𝐆𝐑𝐎𝐔𝐏👨‍💻
https://chat.whatsapp.com/ClnojBuE3NCKtB69NDcRFe

┣⃞❑💃⃟➤ 

┃ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${Config.ownername}*
┗╼═╾╼═╾╼═╾╼═╾╼═╾❋`;
            let aliveMessage = {
                image: {
                 url:  await botpic(),
                       },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });     

        }
    )
