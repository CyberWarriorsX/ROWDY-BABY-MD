const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "upbio",
    react: "🥏",
    alias: ["updatebio"],
    desc: "Change the Bot number Bio",
    category: "profile",
    use: '.upbio',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
if ( !q ) return reply('❓ *Enter the New Bio*')
if (q.length > 139 ) return reply('❗ *Sorry ! Characters limit Exceded*')
await conn.updateProfileStatus(q)
 await conn.sendMessage(from , { text: "✔️ *New Bio Added Successfully*" }, { quoted: mek } )

} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "getprivacy",
    react: "🥏",
    alias: ["getprivacysettings","gpvc"],
    desc: "Get the bot Number Privacy Setting Updates",
    category: "profile",
    use: '.getprivacy',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
const duka = await conn.fetchPrivacySettings(true)
let puka = `Read Recipt - ${duka.readreceipts}
Profile Picture - ${duka.profile}
Status  - ${duka.status}
Online - ${duka.online}
Last Seen - ${duka.last}
Group Privacy - ${duka.groupadd}
Call Privacy - ${duka.calladd}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ꜱᴛᴀʙʟᴇ ᴠᴇʀꜱɪᴏɴ ʀᴇʟᴇᴀꜱᴇ - ɪɪ*`
 await conn.sendMessage(from , { text: puka }, { quoted: mek } )

} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "removepp",
    react: "🥏",
    alias: ["rmpp"],
    desc: "Remove the botNumber PP",
    category: "profile",
    use: '.removepp',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
await conn.removeProfilePicture(botNumber2)
 await conn.sendMessage(from , { text: "✔️ *Profile Pic Successfully removed*" }, { quoted: mek } )

} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})
