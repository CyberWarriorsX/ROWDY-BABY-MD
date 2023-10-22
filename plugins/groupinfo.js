const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "setgpp",
    react: "🌄",
    alias: ["grouppp","setgrouppp"],
    desc: "Change to group's Display Picture.",
    category: "group",
    use: '.setgpp',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2,mime , botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This is Group command*')
if (!isBotAdmins) return reply('🚫 *Bot must be Admin frist*')
if (!isAdmins) { if (!isDev) return reply('🚫 *You must be admin frist*') }
 if (!quoted) return reply(`Send/Reply Image With Caption `)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption `)
                let media = await quoted.download()
                await conn.updateProfilePicture(from, { url: media })
                reply('✔️ *Group Display pic Successfully Updated*')
                
} catch (e) {
reply('*Error !!*')
l(e)
}
})

