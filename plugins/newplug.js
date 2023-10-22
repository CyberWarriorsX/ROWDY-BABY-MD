const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')
const fs = require('fs')
let { img2url } = require('@blackamda/telegram-image-url')

cmd({
    pattern: "imgtourl",
    react: "🌏",
    alias: ["uploadp"],
    desc: "Img Uploader",
    category: "extra",
    use: '.uploadp',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Replay a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
const imgURL = await img2url(media)
reply(`\n${imgURL}\n`)

await fs.unlinkSync(media)
} else return reply('Please mention a Image')


} catch (e) {
reply(e)
}
})