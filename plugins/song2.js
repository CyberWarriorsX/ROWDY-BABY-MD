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
    pattern: "song2",
    alias: ["getytmp3","ytd2","cyber_getytmp3"],
    use: '.song lelena',
    react: "🎶",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply(" *Please enter Youtube Song's title 🎶  or Youtibe Url* 🖇️")
if ( isUrl(q)) {
if(!q.includes('youtu')) return reply('🚫 *Please enter Youtube url*')
const msg = await conn.sendMessage(from,{text: "⬇️ *Downloading Mp3 from Url Please wait...*" },{quoted:mek })
const ytd = await dl.youtubedlv2(q)
var vid = await yt5s(q)
let sizes = vid.result.audio[128].Size
const deta = ytd.audio['128kbps'].fileSize

if ( deta > 102400 ) {
await conn.sendMessage(from,{ text : "❗ File exceded the Media Upload Limit\n\n💱 ```Please wait to it send as a Document Type```", edit : msg.key })
const buf = await getBuffer(vid.result.thumbnail)
let datas =`*Cyber-X Youtube Mp3 Downloader*

🎶 *Title - ${ytd.title}*

🖇️ Url - ${q}

📁 Size - ${sizes}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*`
await conn.sendMessage(from,{ text : datas , edit : msg.key })
return await conn.sendMessage(from, { document : { url : await vid.result.audio[128].url() } , jpegThumbnail:buf ,caption: "*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" ,mimetype: 'audio/mp3', fileName: `${ytd.title}.mp3` }, { quoted: mek })
}

let data =`*Cyber-X Youtube MP3 Downloader*

🎶 *Title - ${ytd.title}*

🖇️ Url - ${q}

📁 Size - ${sizes}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*`
await conn.sendMessage(from,{ text : data , edit : msg.key })
return await conn.sendMessage(from, { audio: { url : await vid.result.audio[128].url() }   , mimetype: 'audio/mpeg', fileName:  `${ytd.title}.mp3` }, { quoted: mek })


}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const ytd = await dl.youtubedlv2(anu.url)
var vid = await yt5s(q)
let sizes = vid.result.audio[128].Size
const deta = ytd.audio['128kbps'].fileSize
let thama =`*Cyber-X Youtube Song Downloader* 🎶

*🎶 Title : ${anu.title}*

📁 Size : ${sizes}

📺 Views : ${anu.views}

🕹️ Duration : ${anu.timestamp}

🔗 Url :  ${anu.url}


🎶 *ʟᴀᴛᴇꜱᴛ ᴛᴡᴏ ʀᴇꜱᴜʟᴛꜱ* 

📌 *${search.videos[1].title}* - _${search.videos[1].url}_

📌 *${search.videos[2].title}* - _${search.videos[2].url}_

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*`
if ( deta > 102400 ) {
await conn.sendMessage(from,{text: "❗ *File exceded the Media Upload Limit*\n\n💱 ```Please wait to it send as a Document Type```" },{quoted:mek })
const buf = await getBuffer(anu.thumbnail)

return await conn.sendMessage(from, { document : { url : await vid.result.audio[128].url() } , jpegThumbnail:buf ,caption: thama ,mimetype: 'audio/mp3', fileName: `${ytd.title}.mp3` }, { quoted: mek })
}

await conn.sendMessage(from,{text: thama },{quoted:mek })
 await conn.sendMessage(from, { audio: { url : await vid.result.audio[128].url() }   , mimetype: 'audio/mpeg', fileName:  `${ytd.title}.mp3` }, { quoted: mek })
} catch (e) {
   
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})
