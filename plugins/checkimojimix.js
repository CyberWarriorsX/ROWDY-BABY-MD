const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const wabetainfo = require('wabetainfo')
const api = require("caliph-api")

cmd({
    pattern: "checkjson",
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
const imo1 = q.split("|")[0] 
const imo2 = q.split("|")[1] 
const duka = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=(${imo1})_(${imo2})`)
console.log(duka)
// await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/4cba162e3b2eb338c6934.jpg" },caption: ok },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*')
l(e)
}
})
