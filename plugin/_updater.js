/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : FORZEN-MD
 * @author : YASIYA-OFC <https://github.com/yasiyaofc>
 * @description : FORZEN-MD,A Multi-functional whatsapp bot.
 * @version 0.0.1
 **/

onst DB = require('../lib/scraper')

const { execSync } = require('child_process')

const { tlang, Config, prefix,cmd } = require('../lib')

    //---------------------------------------------------------------------------

cmd({

            pattern: "update",

            desc: "Shows repo\'s refreshed commits.",

            category: "misc",

            filename: __filename

        },

        async(Void, citel, text,{ isCreator }) => {

            if (!isCreator) return citel.reply('*OWNER CMD* ⛔')

            let commits = await DB.syncgit()

            if (commits.total === 0) {

                citel.reply(`*You have latest version installed.* ✔️`)

            } else {

                let update = await DB.sync()

                  let buttonMessaged = {

                    text: update,

                    footer: 'UPDATER',

                    headerType: 4

                };

                return await Void.sendMessage(citel.chat, buttonMessaged);

            }

        }

    )

  
