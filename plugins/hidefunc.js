const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')
const { PornHub } = require('pornhub.js')

cmd({
    pattern: "activate_18+",
    react: "⚙",
    alias: ["unlock18"],
    desc: "Cyber-X Configuration Tool",
    category: "extra",
    use: '.activate_18+',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is Devs team only Command*"},{quoted:mek }) 
		const db_pool = new DBM({
    db: config.DATABASE_URL
})
		await db_pool.insert( "18_BOT_OK" , "true" )
			await conn.sendMessage(from,{text: "*18+ Commands Successfully Activated️*"},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "unlock_18+",
    react: "💱",
    alias: ["add18+"],
    desc: "Add a 18+ User",
    category: "extra",
    use: '.unlock_18+',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
       const db_pool = new DBM({
    db: config.DATABASE_URL
})
		if(!isCreator) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is Moderators only command*"},{quoted:mek }) }
		const mention= await mentionByTag
		let users = await (mention[0]) || mek.msg.contextInfo.participant
		if (!users) return reply("🚫 *Couldn't find any user in context*")
		const data = await db_pool.get('18_USERS')
		const duka = users.split("@")[0]
	        if(data.includes(duka)) return reply('❗ *User already in 18+ User List*')
		let ok = data + "," + duka
		await db_pool.insert('18_USERS', ok )
		await conn.sendMessage(from,{text: "*18+ User List Updated* ✔️"},{quoted:mek })
	
} catch (e) {
const mention= await mentionByTag
let users = await (mention[0]) || mek.msg.contextInfo.participant
const duka = users.split("@")[0]
	const db_pool = new DBM({
    db: config.DATABASE_URL
})
await db_pool.insert('18_USERS', duka )
const datada = await db_pool.get('18_USERS')
await conn.sendMessage(from,{text: "```" + datada + "``` *Added as a 18+ User*" },{quoted:mek })

}
})


cmd({
    pattern: "phs",
    react: "🔎",
    alias: ["pornhubsearch"],
    desc: "Pornhub Searcher",
    category: "hide",
    use: '.technewsall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const db_pool = new DBM({
    db: config.DATABASE_URL
})
const data = await db_pool.get('18_USERS')
const datas = await db_pool.get('18_BOT_OK')
if ( datas == 'true' ) {
const onada = data.split(",")
const isXuser = [ botNumber2 , ...onada ]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(sender)
if ( !isCreator && !isDev && !isXuser ) return reply('💬 *You do not have permission to use this Commands. ❗*\n\n⛔ *Please contact the Developer Team and get permission from them use to 18+ commands.* 👨‍💻')
if (!q) return reply("❗ *Please enter text to Search*")
const pornhub = new PornHub()
const vid = await pornhub.searchVideo(q)
	console.log(vid)
    let yt = `🔞 Requester - ${pushname} \n\n`
    for (let i of vid.data ) {
        yt += `📃 *${i.title}*\n🔗 _Link : ${i.url}_ \n💬 Duration : ${i.duration}\n\n\n`
    }
 await conn.sendMessage(from,{image:{url : "https://telegra.ph/file/5ce93092834d1bf8b2e60.jpg" },caption: yt + "*© ᴄʏʙᴇʀ-x ᴡᴀ ʙᴏᴛ ʟᴏᴄᴋᴇᴅ ᴄᴍᴅ ꜱᴇᴄᴛɪᴏɴ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ*" },{quoted:mek })

} else return reply('💬 *Bot not ready for use this cmds*\n\nɪ. _ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ ᴛᴏ ᴀᴄᴛɪᴠᴀᴛᴇ ʙᴏᴛ ꜰʀᴏᴍ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ_\nɪɪɪ. _ᴛʜɪꜱ ɪꜱ ᴘᴀɪᴅᴀʙʟᴇ ᴄᴏᴍᴍᴀɴᴅ ꜱᴇᴄᴛɪᴏɴ_')
} catch (e) {
reply('💬 *Bot not ready for use this cmds*\n\nɪ. _ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ ᴛᴏ ᴀᴄᴛɪᴠᴀᴛᴇ ʙᴏᴛ ꜰʀᴏᴍ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ_\nɪɪ. _ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ ꜰᴏʀ ᴜɴʟᴏᴄᴋ ʏᴏᴜ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅꜱ_\nɪɪɪ. _ᴛʜɪꜱ ɪꜱ ᴘᴀɪᴅᴀʙʟᴇ ᴄᴏᴍᴍᴀɴᴅ ꜱᴇᴄᴛɪᴏɴ_\n\nError Code :-' + e )
l(e)
}
})
