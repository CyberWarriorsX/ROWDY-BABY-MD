const config = require('../config')
const { cmd, commands } = require('../command')
const fs = require('fs-extra')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { sswebA } = require('getscreenshot.js')

cmd({
    pattern: "ss",
    react: "📸",
    alias: ["ssweb"],
    desc: "Get Screenshots from Links",
    category: "extra",
    use: '.ss',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('🖊️ *Please write the Link*')
if (!isUrl(q)) return reply('⛔️ *Only usable for Link\n\n_Eg -: https://github.com/darkalphaxteam_')
const makeRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const res = await sswebA( q ,false,'desktop');
let namefile = makeRandom('') + '.jpg'
fs.writeFileSync(namefile, res)
await conn.sendMessage(from, { image: fs.readFileSync(namefile), caption: '*Screenshots completed* ✔️' }, { quoted: mek })
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})
