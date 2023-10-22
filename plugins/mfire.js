const config = require('../config')
const fg = require('api-dylux');
const { mediafireDl } = require('mfiredlcore-vihangayt')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "mediafire",
    alias: ["mfire","mf","cyber_mf"],
    react: '📁',
    desc: "Download mediafire files.",
    category: "download",
    use: '.mediafire <mediafire link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('*Please give me a mediafire Link*')
if (!q.includes('mediafire.com')) return reply('*Please give me a mediafire Link*')
if (!q.includes('/file')) return reply('*Please give me a mediafire url*')
const baby1 = await mediafireDl(q)
if(baby1.size.includes('MB') && baby1.size.replace('MB','') > config.MAX_SIZE) return reply("❌ ```Unable to upload this file according to your Platform's Upload Size```❗\n\n*_Please update your MAX_SIZE var on the Upload Size on your platform_* ❗🧑‍💻")
//if(baby1.size.includes('GB')) return reply("❌ ```Unable to upload this file according to your Platform's Upload Size```❗\n\n*_Please update your MAX_SIZE var on the Upload Size on your platform_* ❗🧑‍💻")
const mfile = conn.sendMessage(from, { document : { url : baby1.link}, fileName : baby1.name, mimetype: baby1.mime,caption: `*🧸 File Name* : ${baby1.name}
*📊 File Size* : ${baby1.size}
*🕹️ File Type* : ${baby1.mime}`}, {quoted: mek})	
await conn.sendMessage(from, { react: { text: '📁', key: mfile.key }})
} catch (e) {
reply('*Error !!*')
l(e)
}
})
