const { exec } = require("child_process")
const config = require('../config')
const fs=require('fs')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const tech = require("tech-news-scraper")
cmd({
    pattern: "toimg",
    react: "🔁",
    alias: ["toimage","photo"],
    desc: "Sticker to image Converter",
    category: "extra",
    use: '.toimg',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q,mime, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{


if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption`)
reply("🔁 *Converting Please wait....*")
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(from, { image: buffer }, { quoted: mek })
fs.unlinkSync(ran)
})
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

