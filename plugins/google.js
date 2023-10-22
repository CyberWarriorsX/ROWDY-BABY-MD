const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { googleSearch , googleImage , googleTranslate } = require("nima-google-now")
cmd({
    pattern: "trt",
    react: "💱",
    alias: ["translate"],
    desc: "Translate text from googletranslate",
    category: "extra",
    use: '.trt si',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if( !quoted) return reply(' ❗ *Please mention a text*')
if (!q) return reply('❗ *Please enter Language Code*')
const tex = m.quoted.msg
    console.log(tex)
const trtt = await googleTranslate( tex , q )
 await conn.sendMessage(from , { text: "*Successfully Translated*\n\n" + trtt.result  }, { quoted: mek } )
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})
