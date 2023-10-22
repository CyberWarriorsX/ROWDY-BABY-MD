const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const wabetainfo = require('wabetainfo')
const api = require("caliph-api")
const { ChatGpt } = require('chatgpt-scraper')
const footer = `\n\n *ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*`
cmd({
    pattern: "gpt",
    react: "🧠",
    alias: ["chatgpt","cyber_gpt"],
    desc: "Open-AI chatGpt Chat",
    category: "extra",
    use: '.gpt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('🖊️ *Please write a Question for me*')
const res = await ChatGpt(q)
console.log('openAi Command Running.. 🧠')
    await conn.sendMessage(from , { text: '*Result from chatGPT openAi Module* \n\n' + res.response }, { quoted: mek } )

} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})
