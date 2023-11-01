const { groupdb , userdb,smd, jsonformat,send, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const fs = require('fs-extra')
const Jimp = require("jimp");
const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/commands')
const axios = require('axios')
let sck = groupdb || false;

if(sck) { 



    if(Config.WORKTYPE != 'private')
{

cmd({
 pattern: "bot",
 desc: "activates and deactivates bot.\nuse buttons to toggle.",
 category: "misc",
 react: "👨‍💻",
 filename: __filename
},
async(Suhail, msg, text,{isCreator}) => {
 if (!msg.isGroup) return msg.reply(tlang().group);
 if(!isCreator) return msg.reply(tlang().owner)
 switch (text.split(" ")[0]) {
           case 'on':{
                   let checkgroup = await sck.findOne({ id: msg.chat })
                   if (!checkgroup) {
                       await sck.new({ id: msg.chat, botenable: "true" })
                       return msg.reply(`Successfully Enabled *${tlang().title}*`)
                   } else {
                       if (checkgroup.botenable == "true") return msg.reply("*Bot* was already enabled")
                       await sck.updateOne({ id: msg.chat }, { botenable: "true" })
                       return msg.reply(`Successfully Enabled *${tlang().title}*`)
                   }
               }

           break
          case 'off':{
                      {
                       let checkgroup = await sck.findOne({ id: msg.chat })
                       if (!checkgroup) {
                           await sck.new({ id: msg.chat, botenable: "false" })
                           return msg.reply(`Successfully disabled *${tlang().title}*`)
                       } else {
                           if (checkgroup.botenable == "false") return msg.reply("*Bot* was already disabled")
                           await sck.updateOne({ id: msg.chat }, { botenable: "false" })
                           return msg.reply(`Successfully disabled *${tlang().title}*`)
                       }
                   }
          }
          break
          default:
          {
                  let checkgroup = await sck.findOne({ id: msg.chat });
            await send(msg,"*_Toggle on/off to Enable/Disable  bot in Chat_*",{},"",msg)
          }
      }
})   
} // if Statements
    //---------------------------------------------------------------------------
/*
cmd({
            pattern: "antispam",
            desc: "Kick Spamers From Group.\nuse buttons to toggle.",
            category: "group",
            filename: __filename
        },
        async(Suhail.bot, msg, text , {isCreator}) => {
            if (!msg.isGroup) return msg.reply(tlang().group);
          let check = text ? text : '';
            let checkgroup = await sck.findOne({ id: msg.chat }) || await sck.new({id : msg.chat , antispam : 'true'  });
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            if (!isAdmins && !isCreator) return msg.reply(tlang().admin)     
            if (check.startsWith("on") || check.startsWith("enable") || check.startsWith("act"))
            { 
                try 
                {
                 await sck.updateOne({ id: msg.chat }, { antispam: "true" })
                  return await msg.reply("*_Antispam Enabled Successfuly in Group_*")
                } catch (error) {   return await msg.reply("*_There's an Error, Antispam Not Enable in Group_*")    }
            }
            else if (check.startsWith("off") || check.startsWith("disable") || check.startsWith("deact") ) 
            {
                try 
                {
                   await sck.updateOne({ id: msg.chat }, { antispam: "false" })
                   return await msg.reply("*_Antispam Disabled Successfuly in Group_*")
                } catch (error) {   return await msg.reply("*_There's an Error, Antispam Not Disable in Group_*")    }
            }      
if (checkgroup.antispam == "true") return msg.reply(`Antispam : kick Users Who Spamming in Group\n\nAntispam is enabled in this Group \n *_For Disabling : ${prefix}antispam off_*`);
else return msg.reply(`Antispam : kick Users Who Spamming in Groupn\n\nAntispam is Disabled in this Group \n *_For Enablling Antispam : ${prefix}antispam on_*`);
        
})
*/
    //---------------------------------------------------------------------------
cmd({
       pattern: "antilink",
       desc: "activates and deactivates antilink.\nuse buttons to toggle.",
       category: "group",
       react: "👨‍💻",
       filename: __filename
   },
   async(Suhail, msg, text , {isCreator}) => {
      function _0x1dd1(_0x190e77,_0x3842b6){const _0x3a2918=_0x3a29();return _0x1dd1=function(_0x1dd110,_0xc0890d){_0x1dd110=_0x1dd110-0x12f;let _0x2f3ec3=_0x3a2918[_0x1dd110];return _0x2f3ec3;},_0x1dd1(_0x190e77,_0x3842b6);}const _0x537363=_0x1dd1;(function(_0x2a498c,_0xe9d7f2){const _0x20fff1=_0x1dd1,_0x275af4=_0x2a498c();while(!![]){try{const _0x1bf60a=-parseInt(_0x20fff1(0x135))/0x1+-parseInt(_0x20fff1(0x14a))/0x2*(-parseInt(_0x20fff1(0x14b))/0x3)+parseInt(_0x20fff1(0x12f))/0x4*(parseInt(_0x20fff1(0x14e))/0x5)+-parseInt(_0x20fff1(0x139))/0x6+parseInt(_0x20fff1(0x13b))/0x7+-parseInt(_0x20fff1(0x136))/0x8+-parseInt(_0x20fff1(0x13c))/0x9*(parseInt(_0x20fff1(0x148))/0xa);if(_0x1bf60a===_0xe9d7f2)break;else _0x275af4['push'](_0x275af4['shift']());}catch(_0x96c32a){_0x275af4['push'](_0x275af4['shift']());}}}(_0x3a29,0xebdc8));if(!msg['isGroup'])return msg['reply'](tlang()[_0x537363(0x141)]);const groupAdmins=await getAdmin(Suhail.bot,msg),isAdmins=msg[_0x537363(0x130)]?groupAdmins[_0x537363(0x143)](msg[_0x537363(0x131)]):![];if(!isAdmins&&!isCreator)return msg[_0x537363(0x149)](tlang()[_0x537363(0x137)]);let checkinfo=await sck['findOne']({'id':msg[_0x537363(0x142)]})||await sck.new({'id':msg[_0x537363(0x142)]}),textt=text?text[_0x537363(0x151)]()['trim']():![],action=textt?textt[_0x537363(0x13e)]('\x20')[0x0]:![];function _0x3a29(){const _0x5d7267=['3041848KwfWrd','admin','delete','3314166wTfUba','antilink\x20kick/delete/off_*','3559514diYetN','9CvvJaC','*_Antilink\x20','split','save','updateOne','group','chat','includes','send','deact','off','*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_','1361390agAqTj','reply','26518zyirsz','237MuHrUF','\x0a\x0a*Antilink\x20Modes:*\x0a\x20\x20.antilink\x20kick\x20(Delete\x20Links\x20&\x20Kick\x20Senders)\x0a\x20\x20.antilink\x20delete\x20(Delete\x20Links\x20Only)\x0a\x20\x20.antilink\x20off\x20(Disable\x20Antilink\x20in\x20chat)\x0a\x0a\x0a','disable','126675qiyDRV','*_Anti_Link\x20Succesfully\x20set\x20to\x20kick\x20link\x20senders!_*','kick','toLowerCase','caption','Disabled','startsWith','antilink','196ZzhnRb','isGroup','sender','false','*_Anti_Link\x20Disabled\x20Succesfully!_*','*Current\x20Mode:*\x20_','762559wgiCsM'];_0x3a29=function(){return _0x5d7267;};return _0x3a29();}if(!action)return await msg[_0x537363(0x144)](_0x537363(0x13d)+(checkinfo[_0x537363(0x155)]===_0x537363(0x132)?_0x537363(0x153):'Enabled')+'\x20in\x20this\x20Group!_*\x20\x0a\x20'+(checkinfo[_0x537363(0x155)]==='false'?'':_0x537363(0x134)+checkinfo[_0x537363(0x155)]+'_')+_0x537363(0x14c)+Config[_0x537363(0x152)]);else{if(action[_0x537363(0x154)](_0x537363(0x146))||action[_0x537363(0x154)](_0x537363(0x145))||action['startsWith'](_0x537363(0x14d)))return await sck[_0x537363(0x140)]({'id':msg['chat']},{'antilink':_0x537363(0x132)}),await msg['send'](_0x537363(0x133));else{if(action[_0x537363(0x154)]('kick'))return await sck[_0x537363(0x140)]({'id':msg[_0x537363(0x142)]},{'antilink':_0x537363(0x150)}),await msg[_0x537363(0x144)](_0x537363(0x14f));else{if(action['startsWith']('delete'))return await sck['updateOne']({'id':msg['chat']},{'antilink':_0x537363(0x138)}),await msg[_0x537363(0x144)]('*_Anti_Link\x20Succesfully\x20set\x20to\x20delete\x20links\x20from\x20chat!_*');else return await msg[_0x537363(0x144)](_0x537363(0x147)+prefix+_0x537363(0x13a));}}}
})



cmd({
    pattern: "welcome",
    alias:["setwelcome"],
    desc: "sets welcome message in specific group.",
    category: "misc",
    react: "👨‍💻",
 filename: __filename
 },
 async(Suhail, msg, text,{ isCreator }) => {
 
        let grp =msg.chat;
        if (!msg.isGroup) return msg.reply(tlang().group);
        const groupAdmins = await getAdmin(Suhail.bot, msg)	
        const isAdmins = groupAdmins.includes(msg.sender) 
        if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
 
      let Group = await sck.findOne({ id: msg.chat }) || await sck.new({ id: msg.chat});
      if (!text)  {  return await msg.reply ("*Wellcome Message :* "+Group.welcome)  }
      await await sck.updateOne({ id: msg.chat }, { welcome:text ,events:'true'})
      let metadata = await Suhail.bot.groupMetadata(msg.chat);
      var ppuser;
      let num = msg.sender;
  
      var welcome_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, metadata.participants.length);
      try {  ppuser = await Suhail.bot.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }
      return await Suhail.bot.sendMessage(msg.chat, { image: { url: ppuser }, caption: welcome_messages,mentions: [num] } )
 
  
 }
 )
 //---------------------------------------------------------------------------
cmd({
    pattern: "goodbye",
    alias: ["setgoodbye","setbye"],
    desc: "sets goodbye message in specific group.",
    category: "misc",
    react: "👨‍💻",
 filename: __filename
 },
 async(Suhail, msg, text,{ isCreator }) => {
 
    if (!msg.isGroup) return msg.reply(tlang().group);
    const groupAdmins = await getAdmin(Suhail.bot, msg)	
    const isAdmins = groupAdmins.includes(msg.sender) 
    if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
 
    let Group = await sck.findOne({ id: msg.chat }) || await sck.new({ id: msg.chat});
    if (!text)  {  return await msg.reply ("*_Goodbye Message Is:_* "+Group.goodbye)  }
    await sck.updateOne({ id: msg.chat }, { goodbye:text,events:'true' }) 
 
    let metadata = await Suhail.bot.groupMetadata(msg.chat);
    var ppuser;
    let num = msg.sender;
    var goodbye_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, metadata.participants.length);
    try {  ppuser = await Suhail.bot.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }
 
        return await Suhail.bot.sendMessage(msg.chat, { image: { url: ppuser }, caption: goodbye_messages, mentions: [num] })
 
 })
 
 //---------------------------------------------------------------------------
 
     //---------------------------------------------------------------------------
     smd({
        pattern: "onlyadmin",
        alias:["antimessge"],
        desc: "Only Admins Allow to Send Message, Others kick.",
        category: "group",
        react: "👨‍💻",
        filename: __filename
    },
    async(Suhail, msg, text , { cmdName ,isCreator}) => {
      const _0x4b01ef=_0x5a6c;(function(_0x42afd8,_0x18cab2){const _0x4e6b35=_0x5a6c,_0x2aa161=_0x42afd8();while(!![]){try{const _0x19acf1=parseInt(_0x4e6b35(0xd6))/0x1*(-parseInt(_0x4e6b35(0xd4))/0x2)+parseInt(_0x4e6b35(0xf6))/0x3*(-parseInt(_0x4e6b35(0xf7))/0x4)+parseInt(_0x4e6b35(0xdb))/0x5+-parseInt(_0x4e6b35(0xe4))/0x6*(parseInt(_0x4e6b35(0xd7))/0x7)+parseInt(_0x4e6b35(0xf2))/0x8*(-parseInt(_0x4e6b35(0xe2))/0x9)+parseInt(_0x4e6b35(0xec))/0xa+parseInt(_0x4e6b35(0xe7))/0xb;if(_0x19acf1===_0x18cab2)break;else _0x2aa161['push'](_0x2aa161['shift']());}catch(_0x44723d){_0x2aa161['push'](_0x2aa161['shift']());}}}(_0x4da6,0xd9095));if(!msg[_0x4b01ef(0xdd)])return msg[_0x4b01ef(0xd2)](tlang()[_0x4b01ef(0xd0)]);const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x4b01ef(0xf5)](Suhail.bot['user']['id']),isAdmins=msg['isGroup']?groupAdmins[_0x4b01ef(0xe3)](msg['sender']):![],isBotAdmins=msg[_0x4b01ef(0xdd)]?groupAdmins[_0x4b01ef(0xe3)](botNumber):![];function _0x5a6c(_0x3f3e7c,_0x356792){const _0x4da637=_0x4da6();return _0x5a6c=function(_0x5a6c42,_0xf5f5e0){_0x5a6c42=_0x5a6c42-0xcf;let _0x21b611=_0x4da637[_0x5a6c42];return _0x21b611;},_0x5a6c(_0x3f3e7c,_0x356792);}if(!isAdmins&&!isCreator)return msg['reply'](tlang()[_0x4b01ef(0xf3)]);function _0x4da6(){const _0x9c8c1f=['enable','*_UHH\x20Please,\x20Provide\x20Admin\x20Role\x20First_*','3469104gRwIaq','admin','\x20Succesfully\x20set\x20to\x20kick\x20message\x20senders!_*\x0a*_Now\x20Only\x20Admins\x20Allow\x20to\x20Send\x20Message\x20in\x20Group_*','decodeJid','3LabDje','3529436fszUMZ','Disabled','act','group','deact','reply','*_Onlyadmin\x20Already\x20Disabled\x20in\x20Current\x20Chat_*','206cFcBdy','onlyadmin','13014HUmNeg','425446MzPaLC','send','toLowerCase','off','6182310CJrGPU','\x20in\x20this\x20Group!_*\x0a\x20*_Toggle:\x20','isGroup','announcement','\x20Succesfully\x20Disable\x20in\x20group!_*\x0a*_Now\x20everyone\x20Send\x20Message\x20in\x20Group_*','findOne','split','27jvVnaa','includes','54OSXEKx','false','updateOne','31428661iArpHf','startsWith','\x20on/off_*','groupSettingUpdate','true','8660850UseQjN','save','chat','*_Onlyadmin\x20Already\x20Enabled\x20in\x20Current\x20Chat_*'];_0x4da6=function(){return _0x9c8c1f;};return _0x4da6();}let checkinfo=await sck[_0x4b01ef(0xe0)]({'id':msg[_0x4b01ef(0xee)]})||await sck.new({'id':msg[_0x4b01ef(0xee)]}),textt=text?text[_0x4b01ef(0xd9)]()['trim']():![],action=textt?textt[_0x4b01ef(0xe1)]('\x20')[0x0]:![];if(!action)return await msg[_0x4b01ef(0xd8)]('*_'+cmdName+'\x20'+(checkinfo[_0x4b01ef(0xd5)]==='false'?_0x4b01ef(0xf8):'Enabled')+_0x4b01ef(0xdc)+(prefix+cmdName)+_0x4b01ef(0xe9));else{if(action[_0x4b01ef(0xe8)](_0x4b01ef(0xda))||action[_0x4b01ef(0xe8)](_0x4b01ef(0xd1))||action[_0x4b01ef(0xe8)]('disable')){if(checkinfo['onlyadmin']===_0x4b01ef(0xe5))return await msg[_0x4b01ef(0xd2)](_0x4b01ef(0xd3));return await sck['updateOne']({'id':msg[_0x4b01ef(0xee)]},{'onlyadmin':_0x4b01ef(0xe5)}),await msg[_0x4b01ef(0xd8)]('*'+cmdName+_0x4b01ef(0xdf));}else{if(action[_0x4b01ef(0xe8)]('on')||action[_0x4b01ef(0xe8)](_0x4b01ef(0xcf))||action[_0x4b01ef(0xe8)](_0x4b01ef(0xf0))){if(checkinfo[_0x4b01ef(0xd5)]===_0x4b01ef(0xeb))return await msg[_0x4b01ef(0xd2)](_0x4b01ef(0xef));if(isBotAdmins)return await sck[_0x4b01ef(0xe6)]({'id':msg[_0x4b01ef(0xee)]},{'onlyadmin':_0x4b01ef(0xeb)}),await Suhail.bot[_0x4b01ef(0xea)](msg['chat'],_0x4b01ef(0xde)),await msg[_0x4b01ef(0xd8)]('*'+cmdName+_0x4b01ef(0xf4));else return await msg[_0x4b01ef(0xd2)](_0x4b01ef(0xf1));}else return await msg[_0x4b01ef(0xd2)]('*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_'+(prefix+cmdName)+'\x20on/off_*');}}
})


//---------------------------------------------------------------------------
smd({
    pattern: "antibot",
    desc: "kick Bot Users from Group!",
    category: "group",
    react: "👨‍💻",
    filename: __filename
},
async(Suhail, msg, text , { cmdName ,isCreator}) => {
  function _0x2d85(_0xaa10,_0x1528ed){const _0x376bc6=_0x376b();return _0x2d85=function(_0x2d8530,_0x1aafaf){_0x2d8530=_0x2d8530-0x88;let _0x6283a1=_0x376bc6[_0x2d8530];return _0x6283a1;},_0x2d85(_0xaa10,_0x1528ed);}const _0x2c4fcf=_0x2d85;(function(_0x847c4d,_0x58ffb9){const _0xa39a68=_0x2d85,_0x181098=_0x847c4d();while(!![]){try{const _0x4acbad=parseInt(_0xa39a68(0xaf))/0x1*(-parseInt(_0xa39a68(0xa4))/0x2)+-parseInt(_0xa39a68(0x96))/0x3+-parseInt(_0xa39a68(0x9e))/0x4*(-parseInt(_0xa39a68(0x95))/0x5)+parseInt(_0xa39a68(0x97))/0x6+-parseInt(_0xa39a68(0x9d))/0x7+-parseInt(_0xa39a68(0xa0))/0x8+parseInt(_0xa39a68(0x9c))/0x9;if(_0x4acbad===_0x58ffb9)break;else _0x181098['push'](_0x181098['shift']());}catch(_0x3ca238){_0x181098['push'](_0x181098['shift']());}}}(_0x376b,0x18e6c));if(!msg[_0x2c4fcf(0xa6)])return msg[_0x2c4fcf(0xac)](tlang()[_0x2c4fcf(0x8d)]);const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x2c4fcf(0x8f)](Suhail.bot[_0x2c4fcf(0xa5)]['id']),isAdmins=msg[_0x2c4fcf(0xa6)]?groupAdmins['includes'](msg[_0x2c4fcf(0xad)]):![],isBotAdmins=msg[_0x2c4fcf(0xa6)]?groupAdmins[_0x2c4fcf(0x9a)](botNumber):![];if(!isAdmins&&!isCreator)return msg[_0x2c4fcf(0xac)](tlang()[_0x2c4fcf(0x92)]);let checkinfo=await sck[_0x2c4fcf(0xa2)]({'id':msg[_0x2c4fcf(0x9b)]})||await sck.new({'id':msg[_0x2c4fcf(0x9b)]}),textt=text?text['toLowerCase']()[_0x2c4fcf(0x88)]():![],action=textt?textt[_0x2c4fcf(0xa7)]('\x20')[0x0]:![];function _0x376b(){const _0x26ca64=['act','updateOne','deact','reply','sender','\x20in\x20this\x20Group!_*\x0a\x20*Toggle:\x20_','31743uMncUs','disable','save','trim','*_Antibot\x20Succesfully\x20Disable\x20in\x20group!_*','*_UHH\x20Please,\x20Provide\x20Admin\x20Role\x20First_*','false','Enabled','group','*_Antibot\x20Succesfully\x20set\x20to\x20kick\x20Bot\x20Users!_*','decodeJid','send','*_Antibot\x20Already\x20Enabled\x20in\x20Current\x20Chat_*','admin','*_Antibot\x20Already\x20Disabled\x20in\x20Current\x20Chat_*','startsWith','267310Oakvjx','610857GRgPyR','649932PmmMyY','Disabled','off','includes','chat','5877639YkNrHt','1231230pAMugo','4OsaJqn','antibot','1143136tzUKkL','*_Antibot\x20Currently\x20','findOne','enable','12iaZUIV','user','isGroup','split','\x20on/off_*'];_0x376b=function(){return _0x26ca64;};return _0x376b();}if(!action)return await msg['send'](_0x2c4fcf(0xa1)+(checkinfo[_0x2c4fcf(0x9f)]===_0x2c4fcf(0x8b)?_0x2c4fcf(0x98):_0x2c4fcf(0x8c))+_0x2c4fcf(0xae)+(prefix+cmdName)+_0x2c4fcf(0xa8));else{if(action[_0x2c4fcf(0x94)](_0x2c4fcf(0x99))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xab))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xb0))){if(checkinfo['antibot']===_0x2c4fcf(0x8b))return await msg[_0x2c4fcf(0xac)](_0x2c4fcf(0x93));return await sck[_0x2c4fcf(0xaa)]({'id':msg[_0x2c4fcf(0x9b)]},{'antibot':_0x2c4fcf(0x8b)}),await msg[_0x2c4fcf(0x90)](_0x2c4fcf(0x89));}else{if(action[_0x2c4fcf(0x94)]('on')||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xa9))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xa3))){if(checkinfo[_0x2c4fcf(0x9f)]==='true')return await msg[_0x2c4fcf(0xac)](_0x2c4fcf(0x91));if(isBotAdmins)return await sck['updateOne']({'id':msg['chat']},{'antibot':'true'}),await msg[_0x2c4fcf(0x90)](_0x2c4fcf(0x8e));else return await msg[_0x2c4fcf(0xac)](_0x2c4fcf(0x8a));}else return await msg[_0x2c4fcf(0xac)]('*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_'+(prefix+cmdName)+_0x2c4fcf(0xa8));}}
})
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
cmd({
    pattern: "disable",
    desc: "disable cmds in Group.!",
    category: "group",
    react: "👨‍💻",
    filename: __filename
},
async(Suhail, msg, text , {isCreator}) => {
  const _0x1d9361=_0x127b;(function(_0x123c59,_0x38488e){const _0x4f5927=_0x127b,_0x2dc94b=_0x123c59();while(!![]){try{const _0x1b484b=-parseInt(_0x4f5927(0x1db))/0x1*(-parseInt(_0x4f5927(0x1c0))/0x2)+-parseInt(_0x4f5927(0x1c3))/0x3+parseInt(_0x4f5927(0x1bc))/0x4*(parseInt(_0x4f5927(0x1c5))/0x5)+parseInt(_0x4f5927(0x1ca))/0x6+parseInt(_0x4f5927(0x1e1))/0x7+-parseInt(_0x4f5927(0x1d6))/0x8*(parseInt(_0x4f5927(0x1d4))/0x9)+-parseInt(_0x4f5927(0x1e7))/0xa*(parseInt(_0x4f5927(0x1e0))/0xb);if(_0x1b484b===_0x38488e)break;else _0x2dc94b['push'](_0x2dc94b['shift']());}catch(_0x255304){_0x2dc94b['push'](_0x2dc94b['shift']());}}}(_0xc473,0x3308a));if(!msg[_0x1d9361(0x1bb)])return msg[_0x1d9361(0x1ce)](tlang()[_0x1d9361(0x1d5)]);const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x1d9361(0x1dd)](Suhail.bot[_0x1d9361(0x1cb)]['id']),isAdmins=msg[_0x1d9361(0x1bb)]?groupAdmins['includes'](msg['sender']):![],isBotAdmins=msg[_0x1d9361(0x1bb)]?groupAdmins[_0x1d9361(0x1cf)](botNumber):![];function _0xc473(){const _0x5035f2=['cmds','2484216cqyAHk','user','\x27\x20is\x20not\x20a\x20bot\x20cmd,\x20Provide\x20valid\x20cmd_*','*_Uhh\x20Dear,\x20I\x20can\x27t\x20disable\x20that\x20cmd_*','send','includes','split','*_Uhh\x20Dear,\x20Theres\x20no\x20cmd\x20disabled\x20in\x20current\x20group_*','disablecmds','test','9jTOFxv','group','1000024agaHtD','find','pattern','false,','\x0a*_Disable\x20cmds\x20:_*\x20```','1IvBDbJ','enable','decodeJid','false','toLowerCase','11418UpETmg','1264900QSGmLC','commands','updateOne','list','```','findOne','6860EBnErX','*_Disable\x20cmds\x20:_*\x20```','alias','*Provide\x20cmd\x20name\x20to\x20disable\x20in\x20group*\x0a*Ex\x20','replace','isGroup','92rfIqmr','chat','*Uhh\x20Dear,\x20Provided\x20cmd\x20already\x20in\x20disable\x20cmds*','info','227118msrhpy','startsWith','trim','77598ksrfVq','\x22\x20Succesfully\x20added\x20in\x20disable\x20cmds_*','79060BsAVtu','reply','disable','admin'];_0xc473=function(){return _0x5035f2;};return _0xc473();}if(!isAdmins&&!isCreator)return msg[_0x1d9361(0x1c6)](tlang()[_0x1d9361(0x1c8)]);function _0x127b(_0x124a51,_0x480f65){const _0xc47391=_0xc473();return _0x127b=function(_0x127b61,_0x4f91c7){_0x127b61=_0x127b61-0x1b8;let _0x3e747f=_0xc47391[_0x127b61];return _0x3e747f;},_0x127b(_0x124a51,_0x480f65);}let checkinfo=await sck[_0x1d9361(0x1e6)]({'id':msg[_0x1d9361(0x1bd)]})||await sck.new({'id':msg[_0x1d9361(0x1bd)]}),textt=text?text[_0x1d9361(0x1df)]()[_0x1d9361(0x1c2)]():![],cmdName=textt?textt[_0x1d9361(0x1d0)]('\x20')[0x0]:'';if(!cmdName)return await msg[_0x1d9361(0x1ce)](_0x1d9361(0x1b9)+prefix+'disable\x20tag(to\x20disabled\x20\x27tag\x27\x20cmd)/info*');else{if(cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1bf))||cmdName['startsWith'](_0x1d9361(0x1e4))||cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1c9)))return await msg['send'](checkinfo[_0x1d9361(0x1d2)]===_0x1d9361(0x1de)?_0x1d9361(0x1d1):_0x1d9361(0x1e8)+checkinfo[_0x1d9361(0x1d2)][_0x1d9361(0x1ba)]('false,','')+'```');else{if(cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1dc))||cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1c7)))return await msg[_0x1d9361(0x1c6)](_0x1d9361(0x1cd));else{if(cmdName){const cmds=sᴜʜᴀɪʟ_ᴍᴅ['commands'][_0x1d9361(0x1d7)](_0x3d1011=>_0x3d1011[_0x1d9361(0x1d8)]===cmdName)||sᴜʜᴀɪʟ_ᴍᴅ[_0x1d9361(0x1e2)][_0x1d9361(0x1d7)](_0x2cf945=>_0x2cf945[_0x1d9361(0x1b8)]&&_0x2cf945['alias'][_0x1d9361(0x1cf)](cmdName));if(cmds){let newCmd=cmds[_0x1d9361(0x1d8)][_0x1d9361(0x1ba)](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),regex=new RegExp('\x5cb'+newCmd+'\x5cb');if(regex[_0x1d9361(0x1d3)](checkinfo[_0x1d9361(0x1d2)]))return await msg[_0x1d9361(0x1ce)](_0x1d9361(0x1be));var newDisable_Cmd=checkinfo[_0x1d9361(0x1d2)]+','+cmds[_0x1d9361(0x1d8)];await sck[_0x1d9361(0x1e3)]({'id':msg[_0x1d9361(0x1bd)]},{'disablecmds':newDisable_Cmd});let lists=newDisable_Cmd['replace'](_0x1d9361(0x1d9),'');return await msg[_0x1d9361(0x1ce)]('*_\x22'+cmdName+_0x1d9361(0x1c4)+(lists===''?'':_0x1d9361(0x1da)+lists+_0x1d9361(0x1e5)));}else return await msg['reply']('*_\x27'+cmdName+_0x1d9361(0x1cc));}}}}

})
//---------------------------------------------------------------------------
cmd({
    pattern: "enable",
    desc: "enable a cmd in Group.!",
    category: "group",
    react: "👨‍💻",
    filename: __filename
},
async(Suhail, msg, text , {isCreator}) => { const _0x19acb0=_0x2b87;(function(_0x1e83d3,_0x35eaa4){const _0x18315e=_0x2b87,_0x2f59dd=_0x1e83d3();while(!![]){try{const _0x16b8b5=-parseInt(_0x18315e(0xfc))/0x1+parseInt(_0x18315e(0x101))/0x2*(parseInt(_0x18315e(0x103))/0x3)+-parseInt(_0x18315e(0x105))/0x4*(-parseInt(_0x18315e(0x102))/0x5)+parseInt(_0x18315e(0xf8))/0x6+-parseInt(_0x18315e(0x108))/0x7*(parseInt(_0x18315e(0x10a))/0x8)+parseInt(_0x18315e(0x100))/0x9*(-parseInt(_0x18315e(0x115))/0xa)+parseInt(_0x18315e(0x10d))/0xb;if(_0x16b8b5===_0x35eaa4)break;else _0x2f59dd['push'](_0x2f59dd['shift']());}catch(_0x2a57d0){_0x2f59dd['push'](_0x2f59dd['shift']());}}}(_0x59df,0xc228d));if(!msg['isGroup'])return msg[_0x19acb0(0x104)](tlang()[_0x19acb0(0xff)]);const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x19acb0(0xf6)](Suhail.bot[_0x19acb0(0x10e)]['id']),isAdmins=msg[_0x19acb0(0xfe)]?groupAdmins['includes'](msg[_0x19acb0(0x110)]):![],isBotAdmins=msg[_0x19acb0(0xfe)]?groupAdmins[_0x19acb0(0xf5)](botNumber):![];function _0x59df(){const _0x2fc64a=['165YTTviz','1506531DdbIjN','send','137844wiflDz','startsWith','test','14TQRbZa','updateOne','5147512SXhXBs','false',',all','19530247uQLOXJ','user','admin','sender','save','replace','chat','_There\x27s\x20no\x20cmd\x20disabled\x20with\x20*','710Zslghn','toLowerCase','includes','decodeJid','trim','7264044TkjRho','reply','findOne','*_All\x20disable\x20cmds\x20succesfully\x20enabled_*','1360455GGWakc','\x22\x20Succesfully\x20removed\x20from\x20disable\x20cmds_*','isGroup','group','149949qpNFMz','2emBDDA'];_0x59df=function(){return _0x2fc64a;};return _0x59df();}if(!isAdmins&&!isCreator)return msg[_0x19acb0(0xf9)](tlang()[_0x19acb0(0x10f)]);function _0x2b87(_0x559939,_0x1e01c1){const _0x59dff7=_0x59df();return _0x2b87=function(_0x2b8751,_0x158178){_0x2b8751=_0x2b8751-0xf5;let _0x8a8f58=_0x59dff7[_0x2b8751];return _0x8a8f58;},_0x2b87(_0x559939,_0x1e01c1);}let checkinfo=await sck[_0x19acb0(0xfa)]({'id':msg[_0x19acb0(0x113)]})||await sck.new({'id':msg['chat']}),textt=text?text[_0x19acb0(0x116)]()[_0x19acb0(0xf7)]():![],cmdName=textt?','+textt['split']('\x20')[0x0]:'',ReplaceCmd=cmdName['replace'](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),regex=new RegExp('\x5cb'+ReplaceCmd+'\x5cb');if(!cmdName||cmdName==='')return await msg[_0x19acb0(0x104)]('*Please\x20provide\x20disabled\x20cmd\x20name\x20to\x20enable\x20it*\x0a*Ex\x20'+prefix+'enable\x20tag(if\x20\x27tag\x27\x20cmd\x20disabled)/all(reset\x20disables)*');else{if(cmdName[_0x19acb0(0x106)](_0x19acb0(0x10c)))return await sck[_0x19acb0(0x109)]({'id':msg['chat']},{'disablecmds':_0x19acb0(0x10b)}),await msg[_0x19acb0(0x104)](_0x19acb0(0xfb));else{if(regex[_0x19acb0(0x107)](checkinfo['disablecmds'])&&checkinfo['disablecmds'][_0x19acb0(0xf5)](cmdName)){let newCmds=checkinfo['disablecmds'][_0x19acb0(0x112)](regex,'');return await sck[_0x19acb0(0x109)]({'id':msg[_0x19acb0(0x113)]},{'disablecmds':newCmds}),await msg[_0x19acb0(0x104)]('*_\x22'+cmdName[_0x19acb0(0x112)](',','')+_0x19acb0(0xfd));}else return await msg[_0x19acb0(0x104)](_0x19acb0(0x114)+cmdName[_0x19acb0(0x112)](',','')+'*\x20name_');}}

})

}
