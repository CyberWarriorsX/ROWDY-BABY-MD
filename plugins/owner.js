const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')

cmd({
    pattern: "owner",
    react: "✈",
    alias: ["ownernumber"],
    desc: "Get Bot Owner Number",
    category: "main",
    use: '.owner',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
       const db_pool = new DBM({
    db: config.DATABASE_URL
}) 
 const data = await db_pool.get('OWNER_NAME')
  let puka = await db_pool.get('OWNER_NUMBER')
 const vcard = `BEGIN:VCARD\n` // metadata of the contact card
            + `VERSION:3.0\n`
            + `FN:${data}\n` // full name
            + `ORG:CYBER-X GANG 2023;\n`// the organization of the contact
            + `TEL;type=CELL;type=VOICE;waid=${puka}:+${puka}\n`// WhatsApp ID + phone number
            + `END:VCARD`
await conn.sendMessage(from,{ contacts: { displayName: data ,contacts: [{ vcard }] }},{quoted:mek })
} catch (e) {
await conn.sendMessage(from,{text: "*❗ No Added Data in Database*\n\n_Please Do this to Use Your Number for this Vcard_\n\n1. ```.apply OWNER_NUMBER=YOUR NUMBER```\n2. ```.apply OWNER_NAME=YOUR NAME```\n\nᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ  ᴏꜰꜰɪᴄɪᴀʟ\nᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ɪɪ" },{quoted:mek })
const vcard = `BEGIN:VCARD\n` // metadata of the contact card
            + `VERSION:3.0\n`
            + `FN:CYBER-X USER\n` // full name
            + `ORG:CYBER-X GANG 2023;\n`// the organization of the contact
            + `TEL;type=CELL;type=VOICE;waid=94711421243:+94711421243\n`// WhatsApp ID + phone number
            + `END:VCARD`
await conn.sendMessage(from,{ contacts: { displayName: "CYBER-X USER" ,contacts: [{ vcard }] }},{quoted:mek })

}
})