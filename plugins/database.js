const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')

cmd({
    pattern: "get",
    react: "🥏",
    alias: ["check"],
    desc: "Get Added Variables",
    category: "main",
    use: '.kick',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
		if(!isCreator) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is Moderator only command*"},{quoted:mek }) }
		const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const data = await db_pool.get(q)
			await conn.sendMessage(from,{text: data },{quoted:mek })
	
} catch (e) {
reply('❗ *No added Data in Database*')
l(e)
}
})

cmd({
    pattern: "apply",
    react: "⚙",
    alias: ["set"],
    desc: "Cyber-X Configuration Tool",
    category: "main",
    use: '.apply',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if(!isCreator) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is Moderator only Command*"},{quoted:mek }) }
if ( !q ) return reply('🧑‍💻  *Please add Valid Database Var with Text*  ❗\n\n📌 Eg -: ```.apply ALIVE_MESSAGE=Hii How Are you Im Alive```\n\n⚠️ *Dont add space befor and after the "=" Symbol*')
if (q.split('=')[0].endsWith(' ')) return reply('🚫 *Dont Add space After the "=" Symbol*')
if (q.split('=')[1].startsWith(' ')) return  reply('🚫 *Dont add Space before the "=" Symbol*')
const icon = q.split("=")[0] 
const data = q.split("=")[1] 
if ( !icon && !data ) reply('🚫 *Sorry ... Text in Error ! Please Add Valid Database Updating Message*')
		const db_pool = new DBM({
    db: config.DATABASE_URL
})
		await db_pool.insert( icon , data )
			await conn.sendMessage(from,{text: "*Database*  ```" + icon + "```  *Updated ✔️*"},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})


cmd({
    pattern: "applylist",
    react: "⚙",
    alias: ["listapply"],
    desc: "Cyber-X Configuration Tool List",
    category: "main",
    use: '.applylist',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const listeka ="🧑‍💻 *CYBER-X 2.0 DATABASE APPLY LIST*\n\n📍 ```ALIVE_IMAGE``` - Add direct link of Image \n\n📍 ```ALIVE_MESSAGE``` - Add your Alive message \n\n📍 ```OWNER_NUMBER``` - Add your Mobile Number \n\n📍 ```OWNER_NAME``` - Add your Name ( Bot Owner )\n\n📍 ```PACK_NAME``` - Add a caption for Bot made Stickers\n\n❗ *Instructions for Using*\n\nEg -: ```.apply ALIVE_MESSAGE=Hii How Are you Im Alive```\n\n⚠️ *Dont Add space After the '=' Symbol*\n⚠️ *Dont Add space before the '=' Symbol*\n\n*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ꜱᴛᴀʙʟᴇ ᴏꜰꜰɪᴄɪᴀʟ ᴠᴇʀꜱɪᴏɴ - ɪɪ*"

await conn.sendMessage(from,{text: listeka },{quoted:mek })

} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})
