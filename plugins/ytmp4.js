const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fg = require('api-dylux')

cmd({  
    pattern: "ytmp4",
    react: "🔄️",
    alias: ["getytmp4"],
    desc: "Youtube video downloader main",
    category: "download",
    use: '.ytmp4',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('❗ *Please enter Youtube video Link*')
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}
const datas = await fg.ytmp4(q)


if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}

const msg = await conn.sendMessage(from, { video: {url: datas.dl_url }, caption: `${datas.title}` }, { quoted: mek }) 
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
await conn.sendMessage(from, { react: { text: "🎞️", key: msg.key }})
}

} catch (e) {
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⛔️`, key: mek.key }})
}

reply('⛔ *Sorry ! Error detected*\n\n```' + e + '```' )
l(e)
}
})
