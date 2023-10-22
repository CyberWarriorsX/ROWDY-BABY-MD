const config = require('../config')
const fg = require('api-dylux');
const l = console.log
const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper')  
const ytdl = require('youtubedl-core')
var { yt5s }  = require('@sl-code-lords/youtube-dl')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "song",
    alias: ["play","yt"],
    use: '.song lelena',
    react: "🎶",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply("❔ *Please enter Query for Search* ")
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
let thama =`*ＣＹＢＥＲ-Ｘ  ＭＰ3  ＤＯＷＮＬＯＡＤＥＲ*  🎶

*🎶 Title : ${anu.title}*

📺 Views : ${anu.views}

🕹️ Duration : ${anu.timestamp}

🖇️ Url : ${anu.url}

${anu.description}

──────────────────────
Please reply a number with prefix to download your song

│.1 - Audio File
│.2 - Document File

*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*`

await conn.sendMessage(from,
{text: thama ,
contextInfo:{
        externalAdReply:{
            title: anu.title ,
            body: "ᴄʏʙᴇʀ-x ʏᴛ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ",
            thumbnail: await getBuffer(anu.thumbnail),
            mediaType:2,
            mediaUrl:anu.url,
        }
}
    },

{quoted:mek })
} catch (e) {
   
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})

cmd({
    pattern: "1",
    alias: ["1song"],
    use: '.1',
    desc: "Search and get details from youtube.",
    category: "search",
    dontAddCommandList : true ,
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !m.quoted ) return
if ( !m.quoted.msg )return
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}

const texts = m.quoted.msg
   const dj = await dl.youtubedl(texts.canonicalUrl)
console.log(dj)
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}

    await conn.sendMessage(from, { audio: { url : await dj.audio['128kbps'].download() }   , mimetype: 'audio/mpeg', fileName:  `${dj.title}.mp3` }, { quoted: mek })
    
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

} catch (e) {
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})

cmd({
    pattern: "2",
    alias: ["2song"],
    use: '.1',
    desc: "Search and get details from youtube.",
    category: "search",
    dontAddCommandList : true ,
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !m.quoted ) return
if ( !m.quoted.msg )return

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}

const texts = m.quoted.msg
   const dj = await dl.youtubedl(texts.canonicalUrl)
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}

   await conn.sendMessage(from, { document : { url : await dj.audio['128kbps'].download() } , caption: dj.title+ "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" ,mimetype: 'audio/mp3', fileName: `${dj.title}.mp3` }, { quoted: mek })
    
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

} catch (e) {
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})