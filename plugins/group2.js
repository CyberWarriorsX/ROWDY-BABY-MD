const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "kick",
    react: "🥏",
    alias: ["remove"],
    desc: "Remove a participant from Group",
    category: "group",
    use: '.kick',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This is Group only Command')
		if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is admin only command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❌ *Bot must be Admin Frist*  ❗")
		const mention = await mentionByTag
		let users = await (mention[0]) || mek.msg.contextInfo.participant
		if (!users) return reply("🚫 *Couldn't find any user in context*")
			await conn.groupParticipantsUpdate(from, [users], "remove")
			await conn.sendMessage(from,{text:`*Successfully removed*  ✔️`},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "promote",
    react: "🥏",
    alias: ["addadmin"],
    desc: "Add a participatant as a Admin",
    category: "group",
    use: '.promote',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This is Group only Command')
		if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is admin only command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❓ *Bot must be Admin Frist*")
		const mention= await mentionByTag
		let users = await (mention[0]) || mek.msg.contextInfo.participant
		if (!users) return reply("🚫 *Couldn't find any user in context*")
		const groupAdmins = await getGroupAdmins(participants) 
		if  ( groupAdmins.includes(users)) return reply('❗ *User Already an Admin*  ✔️')
		    await conn.groupParticipantsUpdate(from, [users], "promote")
			await conn.sendMessage(from,{text:`*User promoted as an Admin*  ✔️`},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "demote",
    react: "🥏",
    alias: ["removeadmin"],
    desc: "Demote Admin to Member",
    category: "group",
    use: '.demote',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This is Group only Command')
		if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is admin only command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❌  *Bot must be Admin Frist*  ❗")
		const mention= await mentionByTag
		let users = await (mention[0]) || mek.msg.contextInfo.participant
		if (!users) return reply("🚫 *Couldn't find any user in context*")
		const groupAdmins = await getGroupAdmins(participants) 
		if  ( !groupAdmins.includes(users)) return reply('❗ *User Already not an Admin*')
		    await conn.groupParticipantsUpdate(from, [users], "demote")
			await conn.sendMessage(from,{text:`*User No longer an Admin*  ✔️`},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "tagall",
    react: "🔊",
    alias: ["cyber_tagall"],
    desc: "Tag all Members",
    category: "group",
    use: '.tagall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
	     if (!isGroup) return reply(' ❗ *This is Group Command*')
         	if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is admin only command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❓ *Bot must be Admin Frist*")
		let teks = `💱 *HI ALL ! GIVE YOUR ATTENTION PLEASE* 
 
`
                for (let mem of participants) {
                teks += `🥎 @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: mek })
                
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "tag",
    react: "🔊",
    alias: ["tg","cyber_tag"],
    desc: "Tag all Members",
    category: "group",
    use: '.tagall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
	     if (!isGroup) return reply(' ❗ *This is Group Command*')
         	if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is admin only command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❓ *Bot must be Admin Frist*")
		if(!q) return reply('මැසේජ් එකක් දීපන් පකෝ')
		let teks = `${q}`
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: mek })
                
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})
