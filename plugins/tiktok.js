const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const wabetainfo = require('wabetainfo')
const api = require("api-dylux")

cmd({
    pattern: "tiktok",
    react: "🥏",
    alias: ["checkjsonresult"],
    desc: "Developing command.",
    category: "search",
    use: '.checkjson',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('Text unavailable')
const duka = await api.tiktok(q)
console.log(duka)
// await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/4cba162e3b2eb338c6934.jpg" },caption: ok },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*')
l(e)
}
})