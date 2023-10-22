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
    pattern: "video",
    alias: ["playvid","getvideo"],
    use: '.video lelena',
    react: "🎬",
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
const dj = await dl.youtubedl(anu.url)
let thama =`\n╭════════════════════⊷❍ 
┃  🎬 *𝚈𝚃  𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁* 🎬
┃⚡  *ᴄʏʙᴇʀ x ʏᴛ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ*  ⚡
╰════════════════════⊷❍

╭═══════════════════⊷❍

┃🎶 *Title* : ${anu.title}

┃📺 *Views* : ${anu.views}

┃🕹️ *Duration* : ${anu.timestamp}

┃🔗 *Url* : ${anu.url}

╰═══════════════════⊷❍

ℹ️ *_Please reply a cmd with prefix to download your song ( Qualities availability will be depend on Your video )_*  ⬇️

─────────────────────

🎥 *.Q1   |       144P Quality* 
🎥 *.Q2  |       360P Quality* 
🎥 *.Q3  |       480P Quality* 
🎥 *.Q4  |       720P Quality* 
🎥 *.Q5  |        1080P Quality*

*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*`

await conn.sendMessage(from,{text: thama },{quoted:mek })
} catch (e) {
   
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})

cmd({
    pattern: "360p",
    alias: ["360video","q2"],
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
const texts = m.quoted.msg
const mess = texts.text
if ( !mess.includes('𝚅𝙸𝙳𝙴𝙾')) return
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}


   const dj = await dl.youtubedl(texts.canonicalUrl)

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}
if ( dj.video['360p'].fileSize > 102400 ) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

return await conn.sendMessage(from, { document : { url : await dj.video['360p'].download() }  ,caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" ,mimetype: 'video/mp4', fileName: `${dj.title}.mp4` }, { quoted: mek })
}
await conn.sendMessage(from, { video: {url: await dj.video['360p'].download() }, caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" }, { quoted: mek })  
    
    
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

} catch (e) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⛔️`, key: mek.key }})
}

  reply('👨‍🔧  *I cant find your video in this quality. please try again with another quality* ❌\n\n' + e)
}
})

cmd({
    pattern: "144p",
    alias: ["144video","q1"],
    use: '.144p',
    desc: "Search and get details from youtube.",
    category: "search",
    dontAddCommandList : true ,
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !m.quoted ) return
if ( !m.quoted.msg )return
const texts = m.quoted.msg
const mess = texts.text
if ( !mess.includes('𝚅𝙸𝙳𝙴𝙾')) return
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}


   const dj = await dl.youtubedl(texts.canonicalUrl)

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}
if ( dj.video['144p'].fileSize > 102400 ) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

return await conn.sendMessage(from, { document : { url : await dj.video['144p'].download() }  ,caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" ,mimetype: 'video/mp4', fileName: `${dj.title}.mp4` }, { quoted: mek })
}
await conn.sendMessage(from, { video: {url: await dj.video['144p'].download() }, caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" }, { quoted: mek })  
    
    
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

} catch (e) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⛔️`, key: mek.key }})
}

  reply('👨‍🔧  *I cant find your video in this quality. please try again with another quality* ❌\n\n' + e)
}
})

cmd({
    pattern: "480p",
    alias: ["480video","q3"],
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
const texts = m.quoted.msg
const mess = texts.text
if ( !mess.includes('𝚅𝙸𝙳𝙴𝙾')) return
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}


   const dj = await dl.youtubedl(texts.canonicalUrl)
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}
if ( dj.video['480p'].fileSize > 102400 ) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

return await conn.sendMessage(from, { document : { url : await dj.video['480p'].download() }  ,caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" ,mimetype: 'video/mp4', fileName: `${dj.title}.mp4` }, { quoted: mek })
}
await conn.sendMessage(from, { video: {url: await dj.video['480p'].download() }, caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" }, { quoted: mek })  
    
    
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

} catch (e) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⛔️`, key: mek.key }})
}

  reply('👨‍🔧  *I cant find your video in this quality. please try again with another quality* ❌\n\n' + e)
}
})

cmd({
    pattern: "720p",
    alias: ["720video","q4"],
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
const texts = m.quoted.msg
const mess = texts.text
if ( !mess.includes('𝚅𝙸𝙳𝙴𝙾')) return
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}


   const dj = await dl.youtubedl(texts.canonicalUrl)

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}
if ( dj.video['720p'].fileSize > 102400 ) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

return await conn.sendMessage(from, { document : { url : await dj.video['720p'].download() }  ,caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" ,mimetype: 'video/mp4', fileName: `${dj.title}.mp4` }, { quoted: mek })
}
await conn.sendMessage(from, { video: {url: await dj.video['720p'].download() }, caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" }, { quoted: mek })  
    
    
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

} catch (e) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⛔️`, key: mek.key }})
}

  reply('👨‍🔧  *I cant find your video in this quality. please try again with another quality* ❌\n\n' + e)
}
})

cmd({
    pattern: "1080p",
    alias: ["1080video","q5"],
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
const texts = m.quoted.msg
const mess = texts.text
if ( !mess.includes('𝚅𝙸𝙳𝙴𝙾')) return
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}


   const dj = await dl.youtubedl(texts.canonicalUrl)

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}
if ( dj.video['1080p'].fileSize > 102400 ) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

return await conn.sendMessage(from, { document : { url : await dj.video['1080p'].download() }  ,caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" ,mimetype: 'video/mp4', fileName: `${dj.title}.mp4` }, { quoted: mek })
}
await conn.sendMessage(from, { video: {url: await dj.video['1080p'].download() }, caption: dj.title + "\n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ • ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" }, { quoted: mek })  
    
    
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
}

} catch (e) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⛔️`, key: mek.key }})
}

  reply('👨‍🔧  *I cant find your video in this quality. please try again with another quality* ❌\n\n' + e)
}
})





